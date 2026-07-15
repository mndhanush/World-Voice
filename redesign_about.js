const fs = require('fs');

const filePath = 'd:/GrowwPark projects/WorldVoice/about.html';
let content = fs.readFileSync(filePath, 'utf-8');

const startTag = '<!-- SECTION 3: The WorldVoice Methodology -->';
const endTag = '<!-- SECTION 4: Our Global Footprint (Stats) -->';

const startIndex = content.indexOf(startTag);
const endIndex = content.indexOf(endTag);

if (startIndex !== -1 && endIndex !== -1) {
    const newSection = `
    <!-- SECTION 3: The WorldVoice Methodology -->
    <section class="py-24 bg-light-surface dark:bg-dark-bg border-b border-gray-200 dark:border-gray-800 transition-colors duration-300 relative overflow-hidden">
      <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div class="text-center mb-20">
          <p class="text-teal-primary uppercase tracking-[0.2em] text-xs font-bold mb-4">The Student Journey</p>
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white uppercase tracking-tight mb-4">
            Our <span class="text-orange-secondary">Methodology</span>
          </h2>
          <div class="w-24 h-1 bg-teal-primary mx-auto rounded-full"></div>
        </div>
        
        <div class="relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-1 before:bg-gradient-to-b before:from-transparent before:via-gray-300 dark:before:via-gray-700 before:to-transparent">
          
          <!-- Step 1 -->
          <div class="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active mb-16">
            <!-- Icon -->
            <div class="flex items-center justify-center w-10 h-10 rounded-full bg-teal-primary text-white border-4 border-white dark:border-dark-bg shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-lg z-10 font-bold text-lg">
              1
            </div>
            <!-- Card -->
            <div class="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white dark:bg-dark-surface border border-gray-200 dark:border-gray-700 p-8 rounded-3xl shadow-xl hover:-translate-y-2 transition-transform duration-300 relative">
              <div class="absolute top-1/2 -mt-3 w-6 h-6 rotate-45 bg-white dark:bg-dark-surface border-l border-b border-gray-200 dark:border-gray-700 md:group-odd:-right-3 md:group-odd:border-l-0 md:group-odd:border-b-0 md:group-odd:border-r md:group-odd:border-t md:group-even:-left-3 -left-3 hidden md:block"></div>
              <h3 class="text-xl font-bold text-gray-900 dark:text-white uppercase mb-3 flex items-center gap-3">
                <i class="fas fa-clipboard-check text-teal-primary"></i> Assess
              </h3>
              <p class="text-gray-600 dark:text-gray-400 text-sm leading-relaxed font-medium">
                Complete comprehensive level placement exams directly through our dedicated student dashboard. This allows our academic counselors to pinpoint your exact starting tier from A1 to C2 and map out your unique curriculum pathway.
              </p>
            </div>
          </div>
          
          <!-- Step 2 -->
          <div class="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active mb-16">
            <!-- Icon -->
            <div class="flex items-center justify-center w-10 h-10 rounded-full bg-orange-secondary text-white border-4 border-white dark:border-dark-bg shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-lg z-10 font-bold text-lg">
              2
            </div>
            <!-- Card -->
            <div class="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white dark:bg-dark-surface border border-gray-200 dark:border-gray-700 p-8 rounded-3xl shadow-xl hover:-translate-y-2 transition-transform duration-300 relative">
              <div class="absolute top-1/2 -mt-3 w-6 h-6 rotate-45 bg-white dark:bg-dark-surface border-l border-b border-gray-200 dark:border-gray-700 md:group-odd:-right-3 md:group-odd:border-l-0 md:group-odd:border-b-0 md:group-odd:border-r md:group-odd:border-t md:group-even:-left-3 -left-3 hidden md:block"></div>
              <h3 class="text-xl font-bold text-gray-900 dark:text-white uppercase mb-3 flex items-center gap-3">
                <i class="fas fa-hands-helping text-orange-secondary"></i> Immerse
              </h3>
              <p class="text-gray-600 dark:text-gray-400 text-sm leading-relaxed font-medium">
                Engage deeply with our native speaker instructor profile blocks. Participate in interactive cultural workshops and download curated audio practice files to consistently train your ear and refine your pronunciation daily.
              </p>
            </div>
          </div>

          <!-- Step 3 -->
          <div class="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
            <!-- Icon -->
            <div class="flex items-center justify-center w-10 h-10 rounded-full bg-teal-primary text-white border-4 border-white dark:border-dark-bg shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-lg z-10 font-bold text-lg">
              3
            </div>
            <!-- Card -->
            <div class="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white dark:bg-dark-surface border border-gray-200 dark:border-gray-700 p-8 rounded-3xl shadow-xl hover:-translate-y-2 transition-transform duration-300 relative">
              <div class="absolute top-1/2 -mt-3 w-6 h-6 rotate-45 bg-white dark:bg-dark-surface border-l border-b border-gray-200 dark:border-gray-700 md:group-odd:-right-3 md:group-odd:border-l-0 md:group-odd:border-b-0 md:group-odd:border-r md:group-odd:border-t md:group-even:-left-3 -left-3 hidden md:block"></div>
              <h3 class="text-xl font-bold text-gray-900 dark:text-white uppercase mb-3 flex items-center gap-3">
                <i class="fas fa-chart-line text-teal-primary"></i> Track & Excel
              </h3>
              <p class="text-gray-600 dark:text-gray-400 text-sm leading-relaxed font-medium">
                Monitor your language acquisition in real-time. Track your class attendance records and view digital course grade books directly on your student portal, ensuring you stay motivated and on course for graduation.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>

    `;
    
    content = content.substring(0, startIndex) + newSection + content.substring(endIndex);
    fs.writeFileSync(filePath, content, 'utf-8');
    console.log('Successfully updated about.html layout');
} else {
    console.log('Could not find tags in about.html');
}
