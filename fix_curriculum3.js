const fs = require('fs');

let content = fs.readFileSync('curriculum.html', 'utf-8');

// 1. Center the numbers
content = content.replace(
    '<div class="relative flex items-start mb-12 group">',
    '<div class="relative flex items-center mb-12 group">'
);
content = content.replace(
    '<div class="relative flex items-start mb-12 group">',
    '<div class="relative flex items-center mb-12 group">'
);
content = content.replace(
    '<div class="relative flex items-start mb-12 group">',
    '<div class="relative flex items-center mb-12 group">'
);
content = content.replace(
    '<div class="relative flex items-start group">',
    '<div class="relative flex items-center group">'
);

// 2. Fix the CTA layout
content = content.replace(
    '<div class="absolute top-10 -left-10 bg-white dark:bg-dark-surface border border-gray-200 dark:border-gray-700 p-4 rounded-xl shadow-xl flex items-center gap-3">',
    '<div class="absolute top-10 left-0 md:-left-10 bg-white dark:bg-dark-surface border border-gray-200 dark:border-gray-700 p-4 rounded-xl shadow-xl flex items-center gap-3">'
);

// 3. Fix the footer icon color just in case checkout reverted it
content = content.replace(
    '<i class="fas fa-phone text-orange-secondary me-4 text-base"></i>',
    '<i class="fas fa-phone text-teal-primary me-4 text-base"></i>'
);

fs.writeFileSync('curriculum.html', content, 'utf-8');
console.log('Curriculum fixed');
