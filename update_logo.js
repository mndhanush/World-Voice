const fs = require('fs');
const path = require('path');

const dirPath = 'd:/GrowwPark projects/WorldVoice';

function processHtmlFile(filePath) {
    let content = fs.readFileSync(filePath, 'utf-8');
    const originalContent = content;
    
    // 1. Replace Logo everywhere it appears in the specific text format
    // Matches: <a href="index.html" ...> ... <span ...>World<span class="text-orange-secondary">Voice</span></span> ... </a>
    // We will just replace the <span> containing WorldVoice with the image.
    const textLogoRegex = /<span class="[^"]*?text-[^"]*?uppercase[^"]*?">\s*World\s*<span class="text-orange-secondary">\s*Voice\s*<\/span>\s*<\/span>/g;
    
    const newLogoSpan = `<img src="assets/logo.png" alt="WorldVoice Logo" class="h-10 xl:h-12 w-auto">`;
    
    content = content.replace(textLogoRegex, newLogoSpan);

    if (content !== originalContent) {
        fs.writeFileSync(filePath, content, 'utf-8');
        console.log(`Updated Logo in ${filePath}`);
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
