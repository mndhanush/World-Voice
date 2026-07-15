const fs = require('fs');
const path = require('path');
const dir = '.';

fs.readdirSync(dir).forEach(file => {
    if (file.endsWith('.html')) {
        const filePath = path.join(dir, file);
        let content = fs.readFileSync(filePath, 'utf-8');
        const oldStr = '<i class="fas fa-phone text-orange-secondary me-4 text-base"></i>';
        const newStr = '<i class="fas fa-phone text-teal-primary me-4 text-base"></i>';
        if (content.includes(oldStr)) {
            content = content.replaceAll(oldStr, newStr);
            fs.writeFileSync(filePath, content, 'utf-8');
            console.log('Updated ' + file);
        }
    }
});
