const fs = require('fs');
let content = fs.readFileSync('user-dashboard.html', 'utf-8');

// Change grid from md:grid-cols-2 to lg:grid-cols-2 in Practice Files section
content = content.replace(
    '<div class="grid grid-cols-1 md:grid-cols-2 gap-6">',
    '<div class="grid grid-cols-1 lg:grid-cols-2 gap-6">'
);

// Add min-w-0 and truncate to all 4 file items
const oldAudio1 = `<div class="flex items-center gap-3">
                                    <div class="w-10 h-10 rounded-full bg-orange-secondary/10 text-orange-secondary flex items-center justify-center shrink-0">
                                        <i class="fas fa-play"></i>
                                    </div>
                                    <div>
                                        <p class="text-[var(--text-color)] font-semibold text-sm">Dialogue_B2_Mod4.mp3</p>
                                        <p class="text-body-muted text-xs font-medium">Added Today • 3.2 MB</p>
                                    </div>
                                </div>
                                <button class="text-body-muted hover:text-orange-secondary transition-colors"><i class="fas fa-download text-lg"></i></button>`;

const newAudio1 = `<div class="flex items-center gap-3 min-w-0">
                                    <div class="w-10 h-10 rounded-full bg-orange-secondary/10 text-orange-secondary flex items-center justify-center shrink-0">
                                        <i class="fas fa-play"></i>
                                    </div>
                                    <div class="min-w-0">
                                        <p class="text-[var(--text-color)] font-semibold text-sm truncate">Dialogue_B2_Mod4.mp3</p>
                                        <p class="text-body-muted text-xs font-medium truncate">Added Today • 3.2 MB</p>
                                    </div>
                                </div>
                                <button class="text-body-muted hover:text-orange-secondary transition-colors shrink-0"><i class="fas fa-download text-lg"></i></button>`;

const oldAudio2 = `<div class="flex items-center gap-3">
                                    <div class="w-10 h-10 rounded-full bg-orange-secondary/10 text-orange-secondary flex items-center justify-center shrink-0">
                                        <i class="fas fa-play"></i>
                                    </div>
                                    <div>
                                        <p class="text-[var(--text-color)] font-semibold text-sm">Vocab_Drill_Travel.mp3</p>
                                        <p class="text-body-muted text-xs font-medium">Oct 10 • 1.5 MB</p>
                                    </div>
                                </div>
                                <button class="text-body-muted hover:text-orange-secondary transition-colors"><i class="fas fa-download text-lg"></i></button>`;

const newAudio2 = `<div class="flex items-center gap-3 min-w-0">
                                    <div class="w-10 h-10 rounded-full bg-orange-secondary/10 text-orange-secondary flex items-center justify-center shrink-0">
                                        <i class="fas fa-play"></i>
                                    </div>
                                    <div class="min-w-0">
                                        <p class="text-[var(--text-color)] font-semibold text-sm truncate">Vocab_Drill_Travel.mp3</p>
                                        <p class="text-body-muted text-xs font-medium truncate">Oct 10 • 1.5 MB</p>
                                    </div>
                                </div>
                                <button class="text-body-muted hover:text-orange-secondary transition-colors shrink-0"><i class="fas fa-download text-lg"></i></button>`;

const oldPdf1 = `<div class="flex items-center gap-3">
                                    <div class="w-10 h-10 rounded-full bg-teal-primary/10 text-teal-primary flex items-center justify-center shrink-0">
                                        <i class="fas fa-file-alt"></i>
                                    </div>
                                    <div>
                                        <p class="text-[var(--text-color)] font-semibold text-sm">Grammar_Exercises_M4.pdf</p>
                                        <p class="text-body-muted text-xs font-medium">Added Today • 800 KB</p>
                                    </div>
                                </div>
                                <button class="text-body-muted hover:text-teal-primary transition-colors"><i class="fas fa-download text-lg"></i></button>`;

const newPdf1 = `<div class="flex items-center gap-3 min-w-0">
                                    <div class="w-10 h-10 rounded-full bg-teal-primary/10 text-teal-primary flex items-center justify-center shrink-0">
                                        <i class="fas fa-file-alt"></i>
                                    </div>
                                    <div class="min-w-0">
                                        <p class="text-[var(--text-color)] font-semibold text-sm truncate">Grammar_Exercises_M4.pdf</p>
                                        <p class="text-body-muted text-xs font-medium truncate">Added Today • 800 KB</p>
                                    </div>
                                </div>
                                <button class="text-body-muted hover:text-teal-primary transition-colors shrink-0"><i class="fas fa-download text-lg"></i></button>`;

const oldPdf2 = `<div class="flex items-center gap-3">
                                    <div class="w-10 h-10 rounded-full bg-teal-primary/10 text-teal-primary flex items-center justify-center shrink-0">
                                        <i class="fas fa-file-alt"></i>
                                    </div>
                                    <div>
                                        <p class="text-[var(--text-color)] font-semibold text-sm">Cultural_Reading_Paris.pdf</p>
                                        <p class="text-body-muted text-xs font-medium">Oct 12 • 2.1 MB</p>
                                    </div>
                                </div>
                                <button class="text-body-muted hover:text-teal-primary transition-colors"><i class="fas fa-download text-lg"></i></button>`;

const newPdf2 = `<div class="flex items-center gap-3 min-w-0">
                                    <div class="w-10 h-10 rounded-full bg-teal-primary/10 text-teal-primary flex items-center justify-center shrink-0">
                                        <i class="fas fa-file-alt"></i>
                                    </div>
                                    <div class="min-w-0">
                                        <p class="text-[var(--text-color)] font-semibold text-sm truncate">Cultural_Reading_Paris.pdf</p>
                                        <p class="text-body-muted text-xs font-medium truncate">Oct 12 • 2.1 MB</p>
                                    </div>
                                </div>
                                <button class="text-body-muted hover:text-teal-primary transition-colors shrink-0"><i class="fas fa-download text-lg"></i></button>`;

content = content.replace(oldAudio1, newAudio1);
content = content.replace(oldAudio2, newAudio2);
content = content.replace(oldPdf1, newPdf1);
content = content.replace(oldPdf2, newPdf2);

fs.writeFileSync('user-dashboard.html', content, 'utf-8');
console.log('Fixed user-dashboard.html layout issues');
