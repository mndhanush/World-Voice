const fs = require('fs');

const filePath = 'd:/GrowwPark projects/WorldVoice/curriculum.html';
let content = fs.readFileSync(filePath, 'utf-8');

const startTag = '<!-- SECTION 3: The Pathway Timeline -->';
const endTag = '<!-- SECTION 4: Cultural Workshop Integration -->';

const startIndex = content.indexOf(startTag);
const endIndex = content.indexOf(endTag);

if (startIndex !== -1 && endIndex !== -1) {
    const newSection = `
    <!-- SECTION 3: The Pathway Timeline -->
    <section class="py-24 bg-light-surface dark:bg-dark-bg border-b border-gray-200 dark:border-gray-800 transition-colors duration-300 relative">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white uppercase tracking-tight mb-16 text-center">
          The <span class="text-orange-secondary">Progression</span> Map
        </h2>

        <!-- Timeline Container -->
        <div class="relative md:max-w-2xl md:mx-auto">
          
          <!-- Vertical Line -->
          <div class="absolute start-[28px] top-4 bottom-4 w-1 bg-gray-200 dark:bg-gray-700 z-0"></div>
          
          <!-- Step 1 -->
          <div class="relative flex items-start mb-12 group">
            <div class="relative z-10 w-10 h-10 shrink-0 bg-teal-primary rounded-full flex items-center justify-center text-white font-bold border-4 border-light-surface dark:border-dark-bg shadow-lg ms-[10px]">1</div>
            <div class="ms-8 bg-white dark:bg-dark-surface p-6 rounded-2xl shadow-md border border-gray-200 dark:border-gray-700 flex-grow">
              <h3 class="text-lg font-bold text-gray-900 dark:text-white uppercase mb-2">Diagnostic Assessment</h3>
              <p class="text-gray-600 dark:text-gray-400 text-sm">Before starting, students complete level placement exams via their dashboard to ensure they are mapped to the correct starting tier.</p>
            </div>
          </div>

          <!-- Step 2 -->
          <div class="relative flex items-start mb-12 group">
            <div class="relative z-10 w-10 h-10 shrink-0 bg-orange-secondary rounded-full flex items-center justify-center text-white font-bold border-4 border-light-surface dark:border-dark-bg shadow-lg ms-[10px]">2</div>
            <div class="ms-8 bg-white dark:bg-dark-surface p-6 rounded-2xl shadow-md border border-gray-200 dark:border-gray-700 flex-grow">
              <h3 class="text-lg font-bold text-gray-900 dark:text-white uppercase mb-2">Core Language Acquisition</h3>
              <p class="text-gray-600 dark:text-gray-400 text-sm">Weekly immersion sessions with native speakers. Students download homework/audio practice files to reinforce daily learning.</p>
            </div>
          </div>

          <!-- Step 3 -->
          <div class="relative flex items-start mb-12 group">
            <div class="relative z-10 w-10 h-10 shrink-0 bg-teal-primary rounded-full flex items-center justify-center text-white font-bold border-4 border-light-surface dark:border-dark-bg shadow-lg ms-[10px]">3</div>
            <div class="ms-8 bg-white dark:bg-dark-surface p-6 rounded-2xl shadow-md border border-gray-200 dark:border-gray-700 flex-grow">
              <h3 class="text-lg font-bold text-gray-900 dark:text-white uppercase mb-2">Cultural Integration</h3>
              <p class="text-gray-600 dark:text-gray-400 text-sm">Interactive cultural workshop timelines are introduced at the B1 level, bridging the gap between vocabulary and societal context.</p>
            </div>
          </div>

          <!-- Step 4 -->
          <div class="relative flex items-start group">
            <div class="relative z-10 w-10 h-10 shrink-0 bg-orange-secondary rounded-full flex items-center justify-center text-white font-bold border-4 border-light-surface dark:border-dark-bg shadow-lg ms-[10px]">4</div>
            <div class="ms-8 bg-white dark:bg-dark-surface p-6 rounded-2xl shadow-md border border-gray-200 dark:border-gray-700 flex-grow">
              <h3 class="text-lg font-bold text-gray-900 dark:text-white uppercase mb-2">Evaluation & Advancement</h3>
              <p class="text-gray-600 dark:text-gray-400 text-sm">View digital course grade books and track class attendance records. Final exams qualify students to advance to the next CEFR level.</p>
            </div>
          </div>

        </div>
      </div>
    </section>

    `;
    
    content = content.substring(0, startIndex) + newSection + content.substring(endIndex);
    fs.writeFileSync(filePath, content, 'utf-8');
    console.log('Successfully rebuilt curriculum timeline with perfect flexbox centering');
} else {
    console.log('Could not find tags in curriculum.html');
}
