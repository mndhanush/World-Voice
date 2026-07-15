const fs = require('fs');

// The icon to add
const iconHtml = `<div class="w-8 h-8 xl:w-10 xl:h-10 bg-gradient-to-br from-teal-500 to-teal-700 rounded-full flex items-center justify-center text-white shadow-lg shadow-teal-primary/30">
              <i class="fas fa-globe-americas text-sm xl:text-base"></i>
            </div>`;

const mobileIconHtml = `<div class="w-8 h-8 bg-gradient-to-br from-teal-500 to-teal-700 rounded-full flex items-center justify-center text-white shadow-lg shadow-teal-primary/30">
              <i class="fas fa-globe-americas text-sm"></i>
            </div>`;

const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));

for (const file of files) {
    let content = fs.readFileSync(file, 'utf-8');
    
    // 1. Add icon to Navbar Logo
    const navbarLogoTarget = `<a href="index.html" class="flex items-center gap-3">
            <div class="flex flex-col">
              <span class="text-lg xl:text-2xl font-bold tracking-widest text-teal-primary dark:text-white uppercase">World<span class="text-orange-secondary">Voice</span></span>`;
              
    const navbarLogoReplacement = `<a href="index.html" class="flex items-center gap-3">
            ${iconHtml}
            <div class="flex flex-col">
              <span class="text-lg xl:text-2xl font-bold tracking-widest text-teal-primary dark:text-white uppercase">World<span class="text-orange-secondary">Voice</span></span>`;
              
    if (content.includes(navbarLogoTarget)) {
        content = content.replace(navbarLogoTarget, navbarLogoReplacement);
    }
    
    // 2. Add logo with icon to top of Hamburger menu
    // The hamburger menu dropdown content starts with:
    // <div class="px-6 pt-4 pb-8 flex flex-col gap-0 max-h-[calc(100vh-120px)] overflow-y-auto hide-scroll">
    //   <!-- Mobile Home Dropdown -->
    const hamburgerTarget = `<div class="px-6 pt-4 pb-8 flex flex-col gap-0 max-h-[calc(100vh-120px)] overflow-y-auto hide-scroll">

          <!-- Mobile Home Dropdown -->`;
          
    const hamburgerReplacement = `<div class="px-6 pt-4 pb-8 flex flex-col gap-0 max-h-[calc(100vh-120px)] overflow-y-auto hide-scroll">

          <!-- Logo in Mobile Menu -->
          <div class="flex items-center gap-3 pb-6 mb-2 border-b border-gray-100 dark:border-gray-800">
            ${mobileIconHtml}
            <span class="text-lg font-bold tracking-widest text-teal-primary dark:text-white uppercase">World<span class="text-orange-secondary">Voice</span></span>
          </div>

          <!-- Mobile Home Dropdown -->`;
          
    if (content.includes(hamburgerTarget)) {
        content = content.replace(hamburgerTarget, hamburgerReplacement);
    }
    
    // 3. Add icon to Footer Logo
    const footerLogoTarget = `<h3 class="text-3xl font-bold tracking-widest uppercase mb-6 text-white">World<span class="text-orange-secondary">Voice</span></h3>`;
    const footerLogoReplacement = `<div class="flex items-center gap-3 mb-6">
            <div class="w-10 h-10 bg-gradient-to-br from-teal-500 to-teal-700 rounded-full flex items-center justify-center text-white shadow-lg shadow-teal-primary/30">
              <i class="fas fa-globe-americas text-lg"></i>
            </div>
            <h3 class="text-3xl font-bold tracking-widest uppercase text-white m-0">World<span class="text-orange-secondary">Voice</span></h3>
          </div>`;
          
    if (content.includes(footerLogoTarget)) {
        content = content.replace(footerLogoTarget, footerLogoReplacement);
    }
    
    fs.writeFileSync(file, content, 'utf-8');
    console.log(`Updated logos in ${file}`);
}
