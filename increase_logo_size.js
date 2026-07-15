const fs = require('fs');

const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));

for (const file of files) {
    let content = fs.readFileSync(file, 'utf-8');
    let updated = false;

    // 1. Navbar Logo: increase from h-10 xl:h-12 to h-12 xl:h-14
    if (content.includes('class="h-10 xl:h-12 w-auto hover:scale-105 transition-transform duration-300"')) {
        content = content.replace(
            'class="h-10 xl:h-12 w-auto hover:scale-105 transition-transform duration-300"',
            'class="h-12 xl:h-16 w-auto hover:scale-105 transition-transform duration-300"'
        );
        updated = true;
    } else if (content.includes('class="h-10 xl:h-12 w-auto')) {
        // Just in case
        content = content.replace(
            'class="h-10 xl:h-12 w-auto',
            'class="h-12 xl:h-16 w-auto'
        );
        updated = true;
    }

    // 2. Hamburger Logo: increase from h-12 to h-16
    const hamburgerSearchStr = '<!-- Mobile Logo -->\n          <div class="flex justify-center pb-6 mb-4 border-b border-gray-100 dark:border-gray-800">\n            <img src="assets/logo.png" alt="WorldVoice Logo" class="h-12 w-auto">\n          </div>';
    
    if (content.includes(hamburgerSearchStr)) {
        content = content.replace(
            hamburgerSearchStr,
            '<!-- Mobile Logo -->\n          <div class="flex justify-center pb-6 mb-4 border-b border-gray-100 dark:border-gray-800">\n            <img src="assets/logo.png" alt="WorldVoice Logo" class="h-16 w-auto">\n          </div>'
        );
        updated = true;
    } else {
        // Fallback for mobile logo
        const fallbackSearch = '<img src="assets/logo.png" alt="WorldVoice Logo" class="h-12 w-auto">';
        if (content.includes(fallbackSearch)) {
            content = content.replace(fallbackSearch, '<img src="assets/logo.png" alt="WorldVoice Logo" class="h-16 w-auto">');
            updated = true;
        }
    }

    if (updated) {
        fs.writeFileSync(file, content, 'utf-8');
        console.log(`Increased logo size in ${file}`);
    }
}
