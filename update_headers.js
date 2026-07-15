const fs = require('fs');
const path = require('path');

const dirPath = 'd:/GrowwPark projects/WorldVoice';

function processHtmlFile(filePath) {
    let content = fs.readFileSync(filePath, 'utf-8');
    const originalContent = content;
    
    // 1. Replace Logo
    // Replace the block from <!-- Logo --> up to the closing </div> of the logo section.
    const logoRegex = /<!-- Logo -->\s*<div class="flex-shrink-0 pr-2 xl:pr-4">\s*<a href="index\.html" class="flex items-center gap-3">\s*<div class="flex flex-col">.*?<\/span>\s*<\/div>\s*<\/a>\s*<\/div>/s;
    const newLogo = `<!-- Logo -->
        <div class="flex-shrink-0 pr-2 xl:pr-4">
          <a href="index.html" class="flex items-center gap-3">
            <img src="assets/logo.png" alt="WorldVoice Logo" class="h-10 xl:h-12 w-auto">
          </a>
        </div>`;
    content = content.replace(logoRegex, newLogo);

    // 2. Update Desktop Menu
    content = content.replace('<div class="hidden 2xl:flex items-center justify-center flex-1">', '<div class="flex items-center justify-center flex-1">');
    
    // 3. Update Desktop Actions & Toggles
    const actionsStart = content.indexOf('<!-- Desktop Actions & Toggles -->');
    const mobileStart = content.indexOf('<!-- Mobile Menu Button & Toggles -->');
    
    if (actionsStart !== -1 && mobileStart !== -1) {
        const actionsBlock = content.substring(actionsStart, mobileStart);
        
        const loginMatch = actionsBlock.match(/<a href="login\.html"[\s\S]*?>Login<\/a>/);
        const registerMatch = actionsBlock.match(/<a href="register\.html"[\s\S]*?>\s*Register\s*<\/a>/);
        const themeMatch = actionsBlock.match(/<!-- Theme Toggle -->\s*<button id="theme-toggle"[\s\S]*?<\/button>/);
        const rtlMatch = actionsBlock.match(/<!-- RTL Toggle -->\s*<button id="rtl-toggle"[\s\S]*?<\/button>/);
        
        if (loginMatch && registerMatch && themeMatch && rtlMatch) {
            let newLogin = loginMatch[0];
            let newRegister = registerMatch[0];
            
            if (!newLogin.includes('whitespace-nowrap')) {
                newLogin = newLogin.replace('transition-all duration-300"', 'transition-all duration-300 whitespace-nowrap"');
            }
            if (!newRegister.includes('whitespace-nowrap')) {
                newRegister = newRegister.replace('transition-all duration-300"', 'transition-all duration-300 whitespace-nowrap"');
            }
            
            const newActions = `<!-- Desktop Actions & Toggles -->
        <div class="flex items-center gap-1.5 xl:gap-3 flex-shrink-0">
          ${rtlMatch[0]}

          ${themeMatch[0]}

          <div class="h-6 w-px bg-gray-300 dark:bg-gray-700 mx-1"></div>

          ${newLogin}
          ${newRegister}
        </div>
        
        `;
            content = content.substring(0, actionsStart) + newActions + content.substring(mobileStart);
        }
    }

    // 4. Remove Mobile Menu & Button entirely
    const newMobileStart = content.indexOf('<!-- Mobile Menu Button & Toggles -->');
    const navEnd = content.indexOf('</nav>');
    
    if (newMobileStart !== -1 && navEnd !== -1) {
        // Need to preserve the </div> before </nav>
        // The original code was: </div>\n      </div>\n\n      <!-- Mobile Menu Dropdown --> ... </nav>
        // Replace from Mobile Menu Button & Toggles to the end of <nav>
        // with just </div>\n    </nav>
        
        // Ensure we find the exact block to replace
        content = content.substring(0, newMobileStart) + '</div>\n    </nav>' + content.substring(navEnd + 6);
    }

    if (content !== originalContent) {
        fs.writeFileSync(filePath, content, 'utf-8');
        console.log(`Updated ${filePath}`);
    } else {
        console.log(`No changes in ${filePath}`);
    }
}

const files = fs.readdirSync(dirPath);
for (const file of files) {
    if (file.endsWith('.html')) {
        processHtmlFile(path.join(dirPath, file));
    }
}
