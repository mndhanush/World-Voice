const fs = require('fs');
const path = require('path');

const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));

for (const file of files) {
    let content = fs.readFileSync(file, 'utf-8');
    
    // Only target the Floating Navbar area to be safe
    const navStart = content.indexOf('<!-- FLOATING NAVBAR -->');
    const navEnd = content.indexOf('  <main');
    
    if (navStart !== -1 && navEnd !== -1) {
        let navBlock = content.substring(navStart, navEnd);
        
        // Replace 2xl:flex with xl:flex
        navBlock = navBlock.replace(/hidden 2xl:flex/g, 'hidden xl:flex');
        // Replace 2xl:hidden with xl:hidden
        navBlock = navBlock.replace(/2xl:hidden flex/g, 'xl:hidden flex');
        navBlock = navBlock.replace(/hidden 2xl:hidden/g, 'hidden xl:hidden');
        // Replace 2xl:rounded-full with xl:rounded-full
        navBlock = navBlock.replace(/2xl:rounded-full/g, 'xl:rounded-full');
        
        content = content.substring(0, navStart) + navBlock + content.substring(navEnd);
        fs.writeFileSync(file, content, 'utf-8');
        console.log(`Updated breakpoints in ${file}`);
    }
}
