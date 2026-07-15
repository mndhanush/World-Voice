const fs = require('fs');

const filePath = 'd:/GrowwPark projects/WorldVoice/pricing.html';
let content = fs.readFileSync(filePath, 'utf-8');

const regex = /<p class="text-white\/80 dark:text-gray-300 mb-8 font-medium leading-relaxed">[\s\S]*?<!-- Testimonial Image -->/;

const replacementStr = `<p class="text-white/80 dark:text-gray-300 mb-8 font-medium leading-relaxed">
              Whether you choose the standard format or the intensive bootcamp, language acquisition opens international doors. Our curriculum pathways are designed to yield measurable results.
            </p>
            
            <div class="grid grid-cols-2 gap-6 mb-8">
              <div>
                <h4 class="text-4xl font-bold text-white mb-1">94%</h4>
                <p class="text-xs font-bold uppercase tracking-widest text-orange-secondary">Pass C1 Exams First Try</p>
              </div>
              <div>
                <h4 class="text-4xl font-bold text-white mb-1">2.5x</h4>
                <p class="text-xs font-bold uppercase tracking-widest text-teal-100 dark:text-teal-400">Faster Fluency via Bootcamps</p>
              </div>
            </div>
          </div>
          
          <div class="bg-white dark:bg-dark-bg rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row relative">
            <!-- Testimonial Image -->`;

if (regex.test(content)) {
    content = content.replace(regex, replacementStr);
    fs.writeFileSync(filePath, content, 'utf-8');
    console.log('Successfully repaired pricing.html');
} else {
    console.log('Regex match not found in pricing.html');
}
