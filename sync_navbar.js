const fs = require('fs');
const path = require('path');

const curriculumHtml = fs.readFileSync('curriculum.html', 'utf-8');

// Extract the floating navbar block
const navStartMarker = '<!-- FLOATING NAVBAR -->';
const navEndMarker = '  <main';
const navStartIndex = curriculumHtml.indexOf(navStartMarker);
const navEndIndex = curriculumHtml.indexOf(navEndMarker);
if (navStartIndex === -1 || navEndIndex === -1) {
    console.error('Could not find navbar in curriculum.html');
    process.exit(1);
}
let baseNavbar = curriculumHtml.substring(navStartIndex, navEndIndex);

// Normalize Curriculum active state back to normal state in the base template
// Desktop
baseNavbar = baseNavbar.replace(
    '<!-- CURRICULUM is active state -->\n            <a href="curriculum.html" class="text-[9px] xl:text-[10px] uppercase tracking-[0.15em] font-bold text-teal-primary dark:text-teal-primary transition-colors whitespace-nowrap px-1.5 xl:px-2 py-2 rounded-full bg-gray-50 dark:bg-gray-800">Curriculum</a>',
    '<a href="curriculum.html" class="text-[9px] xl:text-[10px] uppercase tracking-[0.15em] font-bold text-gray-800 dark:text-gray-200 hover:text-teal-primary dark:hover:text-teal-primary transition-colors whitespace-nowrap px-1.5 xl:px-2 py-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800">Curriculum</a>'
);
// Mobile
baseNavbar = baseNavbar.replace(
    '<a href="curriculum.html" class="block py-4 border-b border-gray-200 dark:border-gray-700 text-teal-primary dark:text-teal-primary text-xs uppercase tracking-widest font-bold">Curriculum</a>',
    '<a href="curriculum.html" class="block py-4 border-b border-gray-200 dark:border-gray-700 text-gray-800 dark:text-gray-200 hover:text-teal-primary transition duration-300 text-xs uppercase tracking-widest font-bold">Curriculum</a>'
);

// Extract script
const scriptStartMarker = '    // Mobile Menu Toggle\n    const mobileMenuButton';
const scriptStartStr = '  <script>\n    // Theme Toggle Functionality\n';
let menuScript = curriculumHtml.substring(curriculumHtml.indexOf(scriptStartStr));

const desktopNormalClasses = 'text-gray-800 dark:text-gray-200 hover:text-teal-primary dark:hover:text-teal-primary hover:bg-gray-100 dark:hover:bg-gray-800';
const desktopActiveClasses = 'text-teal-primary dark:text-teal-primary bg-gray-50 dark:bg-gray-800';

const mobileNormalClasses = 'text-gray-800 dark:text-gray-200 hover:text-teal-primary transition duration-300';
const mobileActiveClasses = 'text-teal-primary dark:text-teal-primary';

const standardLinks = [
    'about.html',
    'student-portal.html',
    'curriculum.html',
    'workshops.html',
    'instructors.html',
    'pricing.html',
    'faq.html',
    'contact.html'
];

function applyActiveState(navHtml, filename) {
    let result = navHtml;
    if (standardLinks.includes(filename)) {
        // Desktop
        const desktopRegex = new RegExp(`<a href="${filename}" class="([^"]*)${desktopNormalClasses}([^"]*)">([^<]+)</a>`, 'g');
        result = result.replace(desktopRegex, `<a href="${filename}" class="$1${desktopActiveClasses}$2">$3</a>`);
        // Mobile
        const mobileRegex = new RegExp(`<a href="${filename}" class="block py-4 border-b border-gray-200 dark:border-gray-700 ${mobileNormalClasses} text-xs uppercase tracking-widest font-bold">([^<]+)</a>`, 'g');
        result = result.replace(mobileRegex, `<a href="${filename}" class="block py-4 border-b border-gray-200 dark:border-gray-700 ${mobileActiveClasses} text-xs uppercase tracking-widest font-bold">$1</a>`);
    } else if (filename === 'index.html' || filename === 'home2.html') {
        // Home active state
        const homeDesktopRegex = new RegExp(`<a href="index.html" class="([^"]*)${desktopNormalClasses}([^"]*)">\\s*<span>Home</span>`, 'g');
        result = result.replace(homeDesktopRegex, `<a href="index.html" class="$1${desktopActiveClasses}$2">\n                <span>Home</span>`);
        
        const homeMobileRegex = new RegExp(`id="mobile-home-dropdown" class="w-full flex items-center justify-between py-4 text-xs uppercase tracking-widest font-bold text-gray-800 dark:text-gray-200 hover:text-teal-primary dark:hover:text-teal-primary transition duration-300`, 'g');
        result = result.replace(homeMobileRegex, `id="mobile-home-dropdown" class="w-full flex items-center justify-between py-4 text-xs uppercase tracking-widest font-bold text-teal-primary dark:text-teal-primary transition duration-300`);
    } else if (filename === 'user-dashboard.html' || filename === 'admin-dashboard.html') {
        // Dashboard active state
        const dashDesktopRegex = new RegExp(`<a href="user-dashboard.html" class="([^"]*)${desktopNormalClasses}([^"]*)">\\s*<span>Dashboard</span>`, 'g');
        result = result.replace(dashDesktopRegex, `<a href="user-dashboard.html" class="$1${desktopActiveClasses}$2">\n                <span>Dashboard</span>`);
        
        const dashMobileRegex = new RegExp(`id="mobile-dash-dropdown" class="w-full flex items-center justify-between py-4 text-xs uppercase tracking-widest font-bold text-gray-800 dark:text-gray-200 hover:text-teal-primary dark:hover:text-teal-primary transition duration-300`, 'g');
        result = result.replace(dashMobileRegex, `id="mobile-dash-dropdown" class="w-full flex items-center justify-between py-4 text-xs uppercase tracking-widest font-bold text-teal-primary dark:text-teal-primary transition duration-300`);
    }
    return result;
}

const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));

for (const file of files) {
    if (file === 'curriculum.html') continue;
    
    let content = fs.readFileSync(file, 'utf-8');
    
    // 1. Replace Navbar
    const navStart = content.indexOf('<!-- FLOATING NAVBAR -->');
    const navEnd = content.indexOf('  <main');
    
    if (navStart !== -1 && navEnd !== -1) {
        let specificNavbar = applyActiveState(baseNavbar, file);
        content = content.substring(0, navStart) + specificNavbar + content.substring(navEnd);
    }
    
    // 2. Replace Scripts
    const scriptStart = content.indexOf('  <script>\n    // Theme Toggle');
    if (scriptStart !== -1) {
        content = content.substring(0, scriptStart) + menuScript;
    }
    
    fs.writeFileSync(file, content, 'utf-8');
    console.log(`Updated ${file}`);
}
