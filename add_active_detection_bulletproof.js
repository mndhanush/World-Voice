const fs = require('fs');

const curriculumHtml = fs.readFileSync('curriculum.html', 'utf-8');

// 1. Get the base navbar from curriculum.html
let navStart = curriculumHtml.indexOf('<!-- FLOATING NAVBAR -->');
let navEnd = curriculumHtml.indexOf('  <main');
let baseNavbar = curriculumHtml.substring(navStart, navEnd);

// FIX: Correctly reset the hardcoded Curriculum active states in the base navbar
baseNavbar = baseNavbar.replace(
    /class="text-\[9px\] xl:text-\[10px\] uppercase tracking-\[0\.15em\] font-bold text-teal-primary dark:text-teal-primary transition-colors whitespace-nowrap px-1\.5 xl:px-2 py-2 rounded-full bg-gray-50 dark:bg-gray-800"/g,
    'class="text-[9px] xl:text-[10px] uppercase tracking-[0.15em] font-bold text-gray-800 dark:text-gray-200 hover:text-teal-primary dark:hover:text-teal-primary transition-colors whitespace-nowrap px-1.5 xl:px-2 py-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"'
);

baseNavbar = baseNavbar.replace(
    /class="block py-4 border-b border-gray-200 dark:border-gray-700 text-teal-primary dark:text-teal-primary text-xs uppercase tracking-widest font-bold"/g,
    'class="block py-4 border-b border-gray-200 dark:border-gray-700 text-gray-800 dark:text-gray-200 hover:text-teal-primary transition duration-300 text-xs uppercase tracking-widest font-bold"'
);

// Reset Dropdown active states to normal
baseNavbar = baseNavbar.replace(
    /class="([^"]*)text-teal-primary dark:text-teal-primary hover:bg-gray-100 dark:hover:bg-gray-800([^"]*)">(\s*)<span>(Home|Dashboard)<\/span>/g,
    'class="$1text-gray-800 dark:text-gray-200 hover:text-teal-primary dark:hover:text-teal-primary hover:bg-gray-100 dark:hover:bg-gray-800$2">$3<span>$4</span>'
);

baseNavbar = baseNavbar.replace(
    /class="w-full flex items-center justify-between py-4 text-xs uppercase tracking-widest font-bold text-teal-primary dark:text-teal-primary transition duration-300 focus:outline-none bg-transparent border-0 cursor-pointer"/g,
    'class="w-full flex items-center justify-between py-4 text-xs uppercase tracking-widest font-bold text-gray-800 dark:text-gray-200 hover:text-teal-primary dark:hover:text-teal-primary transition duration-300 focus:outline-none bg-transparent border-0 cursor-pointer"'
);

// 2. Extract scripts and add bulletproof active detection
const scriptStartStr = '  <script>';
const scriptStartPos = curriculumHtml.lastIndexOf(scriptStartStr);
let menuScript = curriculumHtml.substring(scriptStartPos);

// Remove existing active detection code
const activeDetIdx = menuScript.indexOf('// Active Page Detection');
if (activeDetIdx !== -1) {
    menuScript = menuScript.substring(0, activeDetIdx) + '\n  </script>\n</body>\n</html>';
}

const activeDetectionJS = `
    // Active Page Detection
    document.addEventListener('DOMContentLoaded', () => {
      // Get the absolute URL without hashes or query parameters
      let currentUrl = window.location.href.split('#')[0].split('?')[0];
      
      // If the URL ends with a slash (e.g. directory root), assume index.html
      if (currentUrl.endsWith('/')) {
          currentUrl += 'index.html';
      }

      // Desktop Nav Detection
      // Using a simpler selector to avoid issues with escaped colons
      const desktopNavContainer = document.querySelector('.hidden.xl\\\\:flex');
      if (desktopNavContainer) {
          const desktopLinks = desktopNavContainer.querySelectorAll('a[href]');
          desktopLinks.forEach(link => {
              if (link.href.split('#')[0].split('?')[0] === currentUrl) {
                  // Remove normal classes
                  link.classList.remove('text-gray-800', 'dark:text-gray-200', 'hover:bg-gray-100', 'dark:hover:bg-gray-800', 'hover:text-teal-primary', 'dark:hover:text-teal-primary');
                  // Add active classes
                  link.classList.add('text-teal-primary', 'dark:text-teal-primary', 'bg-gray-50', 'dark:bg-gray-800');
                  
                  // If it's inside a dropdown (like Home or Dashboard)
                  const parentDropdownBtn = link.closest('.group')?.querySelector('a');
                  if (parentDropdownBtn && parentDropdownBtn !== link) {
                      parentDropdownBtn.classList.remove('text-gray-800', 'dark:text-gray-200');
                      parentDropdownBtn.classList.add('text-teal-primary', 'dark:text-teal-primary');
                  }
              }
          });
      }

      // Mobile Nav Detection
      const mobileNavContainer = document.getElementById('mobile-menu');
      if (mobileNavContainer) {
          const mobileLinks = mobileNavContainer.querySelectorAll('a[href]');
          mobileLinks.forEach(link => {
              if (link.href.split('#')[0].split('?')[0] === currentUrl) {
                  // Remove normal classes
                  link.classList.remove('text-gray-800', 'dark:text-gray-200');
                  // Add active classes
                  link.classList.add('text-teal-primary', 'dark:text-teal-primary');
                  
                  // If it's inside a dropdown
                  const parentDropdownContainer = link.closest('.flex-col');
                  if (parentDropdownContainer) {
                      const parentDropdownBtn = parentDropdownContainer.parentElement.querySelector('button');
                      if (parentDropdownBtn) {
                          parentDropdownBtn.classList.remove('text-gray-800', 'dark:text-gray-200');
                          parentDropdownBtn.classList.add('text-teal-primary', 'dark:text-teal-primary');
                      }
                  }
              }
          });
      }
    });
  </script>
</body>
</html>`;

menuScript = menuScript.replace(/<\/script>[\s\S]*<\/html>/, activeDetectionJS);

// Loop and update all files
const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));
for (const file of files) {
    let content = fs.readFileSync(file, 'utf-8');
    
    let fNavStart = content.indexOf('<!-- FLOATING NAVBAR -->');
    let fNavEnd = content.indexOf('  <main');
    
    if (fNavStart !== -1 && fNavEnd !== -1) {
        content = content.substring(0, fNavStart) + baseNavbar + content.substring(fNavEnd);
    }
    
    let fScriptStart = content.lastIndexOf('  <script>');
    if (fScriptStart !== -1) {
        content = content.substring(0, fScriptStart) + menuScript;
    }
    
    fs.writeFileSync(file, content, 'utf-8');
    console.log(`Injected bulletproof active detection into ${file}`);
}
