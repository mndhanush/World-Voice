const fs = require('fs');
const path = require('path');

const dirPath = 'd:/GrowwPark projects/WorldVoice';
const targetStr = '<img src="assets/logo.png" alt="WorldVoice Logo" class="h-12 xl:h-16 w-auto">';
const replacementStr = '<img src="assets/logo.png" alt="WorldVoice Logo" class="h-16 xl:h-20 w-auto">';

const files = fs.readdirSync(dirPath);
for (const file of files) {
    if (file.endsWith('.html')) {
        const filePath = path.join(dirPath, file);
        let content = fs.readFileSync(filePath, 'utf-8');
        
        if (content.includes(targetStr)) {
            content = content.split(targetStr).join(replacementStr);
            fs.writeFileSync(filePath, content, 'utf-8');
            console.log(`Updated logo size in ${file}`);
        } else {
            console.log(`No match found in ${file}`);
        }
    }
}
