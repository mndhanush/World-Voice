const fs = require('fs');

const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));

for (const file of files) {
    let content = fs.readFileSync(file, 'utf-8');
    let updated = false;

    // 1. Replace Navbar Logo
    // Search for the logo block between flex-shrink-0 and Desktop Menu
    const navRegex = /(<div class="flex-shrink-0 pr-2 xl:pr-4">)[\s\S]*?(<!-- Desktop Menu -->)/;
    if (navRegex.test(content)) {
        const replacement = `$1
          <a href="index.html" class="flex items-center">
            <img src="assets/logo.png" alt="WorldVoice Logo" class="h-10 xl:h-12 w-auto hover:scale-105 transition-transform duration-300">
          </a>
        </div>

        $2`;
        content = content.replace(navRegex, replacement);
        updated = true;
    }

    // 2. Inject Mobile/Hamburger Menu Logo
    // Search for the start of the mobile menu items
    const mobileRegex = /(<div class="px-6 pt-4 pb-8 flex flex-col gap-0 max-h-\[calc\(100vh-120px\)\] overflow-y-auto hide-scroll">)(\s*)(<!-- Mobile Home Dropdown -->)/;
    if (mobileRegex.test(content)) {
        // Only inject if not already injected
        if (!content.includes('<!-- Mobile Logo -->')) {
            const replacement = `$1$2<!-- Mobile Logo -->
          <div class="flex justify-center pb-6 mb-4 border-b border-gray-100 dark:border-gray-800">
            <img src="assets/logo.png" alt="WorldVoice Logo" class="h-12 w-auto">
          </div>$2$3`;
            content = content.replace(mobileRegex, replacement);
            updated = true;
        }
    }

    if (updated) {
        fs.writeFileSync(file, content, 'utf-8');
        console.log(`Updated logo in ${file}`);
    } else {
        console.log(`Could not find targets in ${file}`);
    }
}
