const fs = require('fs');

const curriculumHtml = fs.readFileSync('curriculum.html', 'utf-8');

// 1. Get the base navbar from curriculum.html
let navStart = curriculumHtml.indexOf('<!-- FLOATING NAVBAR -->');
let navEnd = curriculumHtml.indexOf('  <main');
let baseNavbar = curriculumHtml.substring(navStart, navEnd);

// Reset ALL desktop links to normal state so there are no static active states
baseNavbar = baseNavbar.replace(
    /class="text-\[9px\] xl:text-\[10px\] uppercase tracking-\[0\.15em\] font-bold text-teal-primary dark:text-teal-primary bg-gray-50 dark:bg-gray-800/g,
    'class="text-[9px] xl:text-[10px] uppercase tracking-[0.15em] font-bold text-gray-800 dark:text-gray-200 hover:text-teal-primary dark:hover:text-teal-primary hover:bg-gray-100 dark:hover:bg-gray-800'
);

// Reset Mobile active state to normal (non-dropdown links)
baseNavbar = baseNavbar.replace(
    /class="block py-4 border-b border-gray-200 dark:border-gray-700 text-teal-primary dark:text-teal-primary text-xs uppercase tracking-widest font-bold"/g,
    'class="block py-4 border-b border-gray-200 dark:border-gray-700 text-gray-800 dark:text-gray-200 hover:text-teal-primary transition duration-300 text-xs uppercase tracking-widest font-bold"'
);

// Reset Desktop Dropdown active states to normal (Home and Dashboard)
baseNavbar = baseNavbar.replace(
    /class="([^"]*)text-teal-primary dark:text-teal-primary hover:bg-gray-100 dark:hover:bg-gray-800([^"]*)">(\s*)<span>(Home|Dashboard)<\/span>/g,
    'class="$1text-gray-800 dark:text-gray-200 hover:text-teal-primary dark:hover:text-teal-primary hover:bg-gray-100 dark:hover:bg-gray-800$2">$3<span>$4</span>'
);

// Reset Mobile Dropdown active states to normal
baseNavbar = baseNavbar.replace(
    /class="w-full flex items-center justify-between py-4 text-xs uppercase tracking-widest font-bold text-teal-primary dark:text-teal-primary transition duration-300 focus:outline-none bg-transparent border-0 cursor-pointer"/g,
    'class="w-full flex items-center justify-between py-4 text-xs uppercase tracking-widest font-bold text-gray-800 dark:text-gray-200 hover:text-teal-primary dark:hover:text-teal-primary transition duration-300 focus:outline-none bg-transparent border-0 cursor-pointer"'
);

// 2. Extract scripts and add active detection
const scriptStartStr = '  <script>';
const scriptStartPos = curriculumHtml.lastIndexOf(scriptStartStr);
let menuScript = curriculumHtml.substring(scriptStartPos);

// Remove any existing active detection code if it was somehow appended
const activeDetIdx = menuScript.indexOf('// Active Page Detection');
if (activeDetIdx !== -1) {
    menuScript = menuScript.substring(0, activeDetIdx) + '\n  </script>\n</body>\n</html>';
}

const activeDetectionJS = `
    // Active Page Detection
    document.addEventListener('DOMContentLoaded', () => {
      const currentPath = window.location.pathname.split('/').pop() || 'index.html';
      
      // Desktop Nav Detection
      const desktopLinks = document.querySelectorAll('.hidden.xl\\\\:flex a[href]');
      desktopLinks.forEach(link => {
          if (link.getAttribute('href') === currentPath) {
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

      // Mobile Nav Detection
      const mobileLinks = document.querySelectorAll('#mobile-menu a[href]');
      mobileLinks.forEach(link => {
          if (link.getAttribute('href') === currentPath) {
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
    });
  </script>
</body>
</html>`;

// Properly inject it right before the closing script tag by looking for </script>
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
    console.log(`Injected active detection into ${file}`);
}
