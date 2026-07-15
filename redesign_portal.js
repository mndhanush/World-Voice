const fs = require('fs');

const filePath = 'd:/GrowwPark projects/WorldVoice/student-portal.html';
let content = fs.readFileSync(filePath, 'utf-8');

const startTag = '<!-- SECTION 2: Portal Quick Access Grid -->';
const endTag = '<!-- SECTION 6: Support / Contact CTA -->';

const startIndex = content.indexOf(startTag);
const endIndex = content.indexOf(endTag);

if (startIndex !== -1 && endIndex !== -1) {
    const newSection = `
    <!-- PORTAL FEATURES ZIG-ZAG SHOWCASE -->
    <section class="py-24 bg-light-surface dark:bg-dark-bg border-b border-gray-200 dark:border-gray-800 transition-colors duration-300 overflow-hidden relative">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <!-- Feature 1: Track Attendance (Image Right) -->
        <div class="flex flex-col lg:flex-row items-center gap-16 mb-32">
          <div class="w-full lg:w-1/2 order-2 lg:order-1">
            <div class="inline-flex items-center gap-2 text-teal-primary font-bold uppercase tracking-widest text-xs mb-4">
              <i class="fas fa-calendar-check text-lg"></i> Stay Consistent
            </div>
            <h2 class="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white uppercase tracking-tight mb-6">
              Track <span class="text-teal-primary">Attendance</span>
            </h2>
            <p class="text-gray-600 dark:text-gray-400 mb-8 font-medium leading-relaxed text-lg">
              Consistency is key to language acquisition. Easily track your class attendance records visually to ensure you meet the requirements for your chosen A1-C2 pathway.
            </p>
            <a href="user-dashboard.html" class="inline-flex items-center text-teal-primary font-bold uppercase text-xs tracking-widest hover:text-orange-secondary transition-colors">
              View My Attendance Log <i class="fas fa-arrow-right ms-2"></i>
            </a>
          </div>
          
          <div class="w-full lg:w-1/2 order-1 lg:order-2">
            <!-- Mock Attendance UI -->
            <div class="bg-white dark:bg-dark-surface border border-gray-200 dark:border-gray-700 rounded-[2rem] p-8 shadow-2xl relative transform hover:-translate-y-2 transition-transform duration-500">
              <div class="absolute -top-6 -right-6 w-24 h-24 bg-teal-primary/10 rounded-full blur-2xl"></div>
              <div class="flex justify-between items-center mb-6 border-b border-gray-100 dark:border-gray-800 pb-4">
                <h4 class="font-bold text-gray-900 dark:text-white uppercase tracking-wider text-sm">Current Month: June</h4>
                <span class="bg-teal-primary/10 text-teal-primary px-3 py-1 rounded-full font-bold text-xs">92% Attendance</span>
              </div>
              <div class="grid grid-cols-7 gap-3 text-center text-xs font-bold mb-3 text-gray-400">
                <div>M</div><div>T</div><div>W</div><div>T</div><div>F</div><div>S</div><div>S</div>
              </div>
              <div class="grid grid-cols-7 gap-3">
                <div class="aspect-square rounded-xl bg-teal-primary/20 flex items-center justify-center text-teal-primary font-bold"><i class="fas fa-check"></i></div>
                <div class="aspect-square rounded-xl bg-teal-primary/20 flex items-center justify-center text-teal-primary font-bold"><i class="fas fa-check"></i></div>
                <div class="aspect-square rounded-xl bg-orange-secondary/20 flex items-center justify-center text-orange-secondary font-bold"><i class="fas fa-times"></i></div>
                <div class="aspect-square rounded-xl bg-teal-primary/20 flex items-center justify-center text-teal-primary font-bold"><i class="fas fa-check"></i></div>
                <div class="aspect-square rounded-xl bg-teal-primary/20 flex items-center justify-center text-teal-primary font-bold"><i class="fas fa-check"></i></div>
                <div class="aspect-square rounded-xl bg-gray-50 dark:bg-gray-800/50"></div>
                <div class="aspect-square rounded-xl bg-gray-50 dark:bg-gray-800/50"></div>
                
                <div class="aspect-square rounded-xl bg-teal-primary flex items-center justify-center text-white font-bold shadow-lg shadow-teal-primary/40"><i class="fas fa-check"></i></div>
                <div class="aspect-square rounded-xl border-2 border-dashed border-gray-200 dark:border-gray-700"></div>
                <div class="aspect-square rounded-xl border-2 border-dashed border-gray-200 dark:border-gray-700"></div>
                <div class="aspect-square rounded-xl border-2 border-dashed border-gray-200 dark:border-gray-700"></div>
                <div class="aspect-square rounded-xl border-2 border-dashed border-gray-200 dark:border-gray-700"></div>
                <div class="aspect-square rounded-xl bg-gray-50 dark:bg-gray-800/50"></div>
                <div class="aspect-square rounded-xl bg-gray-50 dark:bg-gray-800/50"></div>
              </div>
            </div>
          </div>
        </div>

        <!-- Feature 2: Practice Resources (Image Left) -->
        <div class="flex flex-col lg:flex-row items-center gap-16 mb-32">
          <div class="w-full lg:w-1/2">
            <div class="grid gap-6">
              <div class="bg-white dark:bg-dark-surface border border-gray-200 dark:border-gray-700 rounded-[2rem] p-8 flex items-center gap-6 shadow-xl hover:-translate-x-2 transition-transform duration-500">
                <div class="w-20 h-20 bg-orange-secondary/10 rounded-2xl flex items-center justify-center shrink-0 text-orange-secondary">
                  <i class="fas fa-microphone-alt text-3xl"></i>
                </div>
                <div class="flex-grow">
                  <h4 class="font-bold text-gray-900 dark:text-white uppercase mb-2 text-lg">Audio Pronunciation</h4>
                  <p class="text-sm text-gray-500 dark:text-gray-400 mb-3">Native speaker dialogue files</p>
                  <div class="flex gap-2">
                    <span class="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded text-[10px] font-bold text-gray-600 dark:text-gray-300 uppercase">MP3</span>
                    <span class="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded text-[10px] font-bold text-gray-600 dark:text-gray-300 uppercase">12 MB</span>
                  </div>
                </div>
              </div>

              <div class="bg-white dark:bg-dark-surface border border-gray-200 dark:border-gray-700 rounded-[2rem] p-8 flex items-center gap-6 shadow-xl hover:translate-x-2 transition-transform duration-500 lg:ml-12">
                <div class="w-20 h-20 bg-teal-primary/10 rounded-2xl flex items-center justify-center shrink-0 text-teal-primary">
                  <i class="fas fa-file-pdf text-3xl"></i>
                </div>
                <div class="flex-grow">
                  <h4 class="font-bold text-gray-900 dark:text-white uppercase mb-2 text-lg">Weekly Homework</h4>
                  <p class="text-sm text-gray-500 dark:text-gray-400 mb-3">Grammar & cultural context</p>
                  <div class="flex gap-2">
                    <span class="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded text-[10px] font-bold text-gray-600 dark:text-gray-300 uppercase">PDF</span>
                    <span class="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded text-[10px] font-bold text-gray-600 dark:text-gray-300 uppercase">2.4 MB</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="w-full lg:w-1/2 lg:pl-10">
            <div class="inline-flex items-center gap-2 text-orange-secondary font-bold uppercase tracking-widest text-xs mb-4">
              <i class="fas fa-headphones text-lg"></i> Download & Learn
            </div>
            <h2 class="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white uppercase tracking-tight mb-6">
              Practice <span class="text-orange-secondary">Resources</span>
            </h2>
            <p class="text-gray-600 dark:text-gray-400 mb-8 font-medium leading-relaxed text-lg">
              Refine your pronunciation and reinforce grammar structures outside of class hours. Your portal provides exclusive access to an extensive library of downloadable materials curated by native speakers.
            </p>
            <a href="user-dashboard.html" class="inline-flex items-center text-orange-secondary font-bold uppercase text-xs tracking-widest hover:text-teal-primary transition-colors">
              Access Resource Library <i class="fas fa-arrow-right ms-2"></i>
            </a>
          </div>
        </div>

        <!-- Feature 3: Digital Grade Book (Image Right) -->
        <div class="flex flex-col lg:flex-row items-center gap-16">
          <div class="w-full lg:w-1/2 order-2 lg:order-1">
            <div class="inline-flex items-center gap-2 text-teal-primary font-bold uppercase tracking-widest text-xs mb-4">
              <i class="fas fa-graduation-cap text-lg"></i> Academic Progress
            </div>
            <h2 class="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white uppercase tracking-tight mb-6">
              Grades & <span class="text-teal-primary">Exams</span>
            </h2>
            <p class="text-gray-600 dark:text-gray-400 mb-8 font-medium leading-relaxed text-lg">
              We provide full transparency into your academic standing. View digital course grade books directly on your dashboard. Ready to advance? You can complete level placement exams right here to unlock the next stage of your curriculum.
            </p>
            <div class="flex flex-wrap gap-4">
              <a href="user-dashboard.html" class="px-8 py-4 bg-teal-primary text-white hover:bg-orange-secondary font-bold uppercase tracking-widest text-xs transition-colors duration-300 rounded-full shadow-lg">
                Enter Student Portal
              </a>
            </div>
          </div>
          
          <div class="w-full lg:w-1/2 order-1 lg:order-2">
            <!-- Grade Book Mockup -->
            <div class="bg-white dark:bg-dark-surface border border-gray-200 dark:border-gray-700 rounded-[2rem] shadow-2xl overflow-hidden relative transform hover:-translate-y-2 transition-transform duration-500">
              <div class="bg-slate-900 px-8 py-6 flex justify-between items-center relative overflow-hidden">
                <div class="absolute inset-0 bg-gradient-to-r from-teal-900 to-slate-900 opacity-50"></div>
                <div class="relative z-10 flex items-center gap-4">
                  <div class="w-12 h-12 bg-teal-primary rounded-full flex items-center justify-center text-white text-xl shadow-lg shadow-teal-primary/30">
                    <i class="fas fa-book"></i>
                  </div>
                  <div>
                    <h4 class="font-bold text-white uppercase tracking-wider text-sm mb-1">Digital Grade Book</h4>
                    <span class="text-teal-400 text-xs uppercase tracking-widest font-bold">Fall Semester</span>
                  </div>
                </div>
                <span class="bg-white/10 backdrop-blur border border-white/20 text-white text-xs px-4 py-2 rounded-full font-bold relative z-10">B2 Level</span>
              </div>
              <div class="p-8">
                <div class="space-y-6">
                  <div class="flex justify-between items-center border-b border-gray-100 dark:border-gray-800 pb-5">
                    <div class="flex items-center gap-4">
                      <div class="w-10 h-10 rounded-lg bg-teal-primary/10 flex items-center justify-center text-teal-primary"><i class="fas fa-users"></i></div>
                      <div>
                        <p class="text-base font-bold text-gray-900 dark:text-white">Cultural Presentation</p>
                        <p class="text-xs text-gray-500 dark:text-gray-400 font-medium">Oral Assessment</p>
                      </div>
                    </div>
                    <span class="text-xl font-bold text-teal-primary">94%</span>
                  </div>
                  <div class="flex justify-between items-center border-b border-gray-100 dark:border-gray-800 pb-5">
                    <div class="flex items-center gap-4">
                      <div class="w-10 h-10 rounded-lg bg-orange-secondary/10 flex items-center justify-center text-orange-secondary"><i class="fas fa-pen-nib"></i></div>
                      <div>
                        <p class="text-base font-bold text-gray-900 dark:text-white">Grammar Mid-term</p>
                        <p class="text-xs text-gray-500 dark:text-gray-400 font-medium">Written Exam</p>
                      </div>
                    </div>
                    <span class="text-xl font-bold text-orange-secondary">88%</span>
                  </div>
                  <div class="flex justify-between items-center">
                    <div class="flex items-center gap-4">
                      <div class="w-10 h-10 rounded-lg bg-teal-primary/10 flex items-center justify-center text-teal-primary"><i class="fas fa-laptop-code"></i></div>
                      <div>
                        <p class="text-base font-bold text-gray-900 dark:text-white">Vocabulary Quiz 4</p>
                        <p class="text-xs text-gray-500 dark:text-gray-400 font-medium">Digital Quiz</p>
                      </div>
                    </div>
                    <span class="text-xl font-bold text-teal-primary">100%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
    
    `;
    
    content = content.substring(0, startIndex) + newSection + content.substring(endIndex);
    fs.writeFileSync(filePath, content, 'utf-8');
    console.log('Successfully updated student-portal.html layout');
} else {
    console.log('Could not find tags in student-portal.html');
}
