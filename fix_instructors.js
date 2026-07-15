const fs = require('fs');

let content = fs.readFileSync('instructors.html', 'utf-8');

// 1. Move Section 5 before Section 3
const startSec5 = content.indexOf('<!-- SECTION 5: Global Footprint -->');
const endSec5 = content.indexOf('<!-- SECTION 6: CTA (Choose Your Instructor) -->');
if (startSec5 !== -1 && endSec5 !== -1) {
    const sec5Content = content.substring(startSec5, endSec5);
    const contentWithoutSec5 = content.substring(0, startSec5) + content.substring(endSec5);
    const targetPos = contentWithoutSec5.indexOf('<!-- SECTION 3: Teaching Methodology -->');
    if (targetPos !== -1) {
        content = contentWithoutSec5.substring(0, targetPos) + sec5Content + '\n    ' + contentWithoutSec5.substring(targetPos);
    }
}

// 2. Fix footer phone icon
content = content.replace(
    '<i class="fas fa-phone text-orange-secondary me-4 text-base"></i>',
    '<i class="fas fa-phone text-teal-primary me-4 text-base"></i>'
);

// 3. Fix the instructor spotlight image cropping (add object-top)
content = content.replace(
    '<img src="https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=800&auto=format&fit=crop" class="w-full h-full object-cover" alt="Instructor Spotlight">',
    '<img src="https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=800&auto=format&fit=crop" class="w-full h-full object-cover object-top" alt="Instructor Spotlight">'
);

fs.writeFileSync('instructors.html', content, 'utf-8');
console.log('Fixed instructors.html');
