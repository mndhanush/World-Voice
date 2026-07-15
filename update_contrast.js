const fs = require('fs');
const path = require('path');

const dirPath = 'd:/GrowwPark projects/WorldVoice';

function processHtmlFile(filePath) {
    let content = fs.readFileSync(filePath, 'utf-8');
    const originalContent = content;
    
    // 1. Update the background gradient overlay in the hero sections to be darker
    content = content.replace(
        /bg-gradient-to-t from-slate-950 via-slate-950\/60 to-slate-950\/40/g,
        'bg-gradient-to-t from-slate-950 via-slate-950/80 to-slate-950/60'
    );
    
    // 2. Change text-teal-primary to text-teal-400 specifically inside the hero h1 tags
    // The hero section usually starts with <section... min-h-[650px]
    // Let's just find the first h1 in the file and if it contains text-teal-primary, change it to text-teal-400.
    const h1Regex = /<h1[^>]*>([\s\S]*?)<\/h1>/;
    const h1Match = content.match(h1Regex);
    if (h1Match) {
        const h1Content = h1Match[0];
        const newH1Content = h1Content.replace(/text-teal-primary/g, 'text-teal-400');
        content = content.replace(h1Content, newH1Content);
    }
    
    // 3. Add drop-shadow-2xl to the animate-fade-in wrapper in the hero section to make text pop out
    // Usually it's <div class="animate-fade-in max-w-3xl mx-auto"> or max-w-4xl
    // We only want to replace the first one (which is in the hero section)
    const fadeRegex = /class="animate-fade-in (max-w-\w+ mx-auto(?: drop-shadow-\w+)?)"/;
    const fadeMatch = content.match(fadeRegex);
    if (fadeMatch && !fadeMatch[0].includes('drop-shadow')) {
        content = content.replace(fadeMatch[0], `class="animate-fade-in ${fadeMatch[1]} drop-shadow-2xl"`);
    }

    // Also change text-orange-secondary to text-orange-400 in the first H1 if needed, to make it pop more
    // But text-orange-secondary (#EA580C) might be bright enough. Let's just change it to text-orange-400 for consistency if it's in the first H1.
    const h1MatchAfterTeal = content.match(h1Regex);
    if (h1MatchAfterTeal) {
        const h1ContentAfterTeal = h1MatchAfterTeal[0];
        const newH1ContentOrange = h1ContentAfterTeal.replace(/text-orange-secondary/g, 'text-orange-400');
        content = content.replace(h1ContentAfterTeal, newH1ContentOrange);
    }

    if (content !== originalContent) {
        fs.writeFileSync(filePath, content, 'utf-8');
        console.log(`Updated contrast in ${path.basename(filePath)}`);
    } else {
        console.log(`No changes needed in ${path.basename(filePath)}`);
    }
}

const files = fs.readdirSync(dirPath);
for (const file of files) {
    if (file.endsWith('.html')) {
        processHtmlFile(path.join(dirPath, file));
    }
}
