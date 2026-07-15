const fs = require('fs');

const filePath = 'd:/GrowwPark projects/WorldVoice/curriculum.html';
let content = fs.readFileSync(filePath, 'utf-8');

const target = '-start-[43px]';
const replacement = '-start-[54px]';

if (content.includes(target)) {
    content = content.split(target).join(replacement);
    fs.writeFileSync(filePath, content, 'utf-8');
    console.log('Successfully updated curriculum timeline alignment');
} else {
    console.log('Target string not found');
}
