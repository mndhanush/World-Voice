const fs = require('fs');

const filePath = 'd:/GrowwPark projects/WorldVoice/index.html';
let content = fs.readFileSync(filePath, 'utf-8');

// Find the dashboard section
const startTag = '<div class="bg-light-bg dark:bg-dark-surface border border-gray-200 dark:border-gray-700 rounded-3xl p-8 shadow-xl">';
const endTag = '<!-- SECTION 4: Cultural Workshops -->';

const startIndex = content.indexOf(startTag);
const endIndex = content.indexOf(endTag);

if (startIndex !== -1 && endIndex !== -1) {
    let sectionContent = content.substring(startIndex, endIndex);
    
    // Replace the specific p tags
    sectionContent = sectionContent.replace(
        /<p class="text-xs text-gray-500 dark:text-gray-400">/g, 
        '<p class="text-sm text-gray-600 dark:text-gray-400 font-medium leading-relaxed">'
    );
    
    content = content.substring(0, startIndex) + sectionContent + content.substring(endIndex);
    fs.writeFileSync(filePath, content, 'utf-8');
    console.log('Successfully updated index.html dashboard grid text size via precise regex block replacement.');
} else {
    console.log('Could not find target section in index.html');
}
