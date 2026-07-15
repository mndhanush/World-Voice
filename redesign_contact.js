const fs = require('fs');

const filePath = 'd:/GrowwPark projects/WorldVoice/contact.html';
let content = fs.readFileSync(filePath, 'utf-8');

const startTag = '<!-- SECTION 2: Contact Information Cards -->';
const endTag = '<!-- SECTION 5: Global Campus Locations -->';

const startIndex = content.indexOf(startTag);
const endIndex = content.indexOf(endTag);

if (startIndex !== -1 && endIndex !== -1) {
    const newSection = `
    <!-- UNIFIED CONTACT SECTION -->
    <section class="py-24 bg-light-surface dark:bg-dark-bg border-b border-gray-200 dark:border-gray-800 transition-colors duration-300 relative overflow-hidden">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div class="bg-white dark:bg-dark-surface rounded-[40px] shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden flex flex-col lg:flex-row">
          
          <!-- Left: Contact Form -->
          <div class="w-full lg:w-3/5 p-10 md:p-16 bg-white dark:bg-dark-surface">
            <h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white uppercase tracking-tight mb-2">Send a Message</h2>
            <p class="text-gray-600 dark:text-gray-400 mb-10 text-sm">Fill out the form below and our team will get back to you within 24 hours. Looking for Curriculum Counseling? Select it from the inquiry type.</p>
            
            <form class="space-y-6">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label class="block text-xs font-bold text-gray-700 dark:text-gray-300 uppercase tracking-widest mb-2">Full Name</label>
                  <input type="text" placeholder="John Doe" class="w-full bg-light-surface dark:bg-dark-bg border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-teal-primary/50 focus:border-teal-primary transition-all">
                </div>
                <div>
                  <label class="block text-xs font-bold text-gray-700 dark:text-gray-300 uppercase tracking-widest mb-2">Email Address</label>
                  <input type="email" placeholder="john@example.com" class="w-full bg-light-surface dark:bg-dark-bg border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-teal-primary/50 focus:border-teal-primary transition-all">
                </div>
              </div>
              
              <div>
                <label class="block text-xs font-bold text-gray-700 dark:text-gray-300 uppercase tracking-widest mb-2">Inquiry Type</label>
                <select class="w-full bg-light-surface dark:bg-dark-bg border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-orange-secondary/50 focus:border-orange-secondary transition-all">
                  <option>General Inquiry</option>
                  <option>Curriculum Counseling Session</option>
                  <option>Student Dashboard Support</option>
                  <option>Corporate Training</option>
                </select>
              </div>

              <div>
                <label class="block text-xs font-bold text-gray-700 dark:text-gray-300 uppercase tracking-widest mb-2">Message</label>
                <textarea rows="5" placeholder="How can we help you?" class="w-full bg-light-surface dark:bg-dark-bg border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-teal-primary/50 focus:border-teal-primary transition-all"></textarea>
              </div>

              <button type="submit" class="bg-orange-secondary text-white hover:bg-teal-primary font-bold uppercase tracking-widest text-sm px-10 py-4 rounded-xl transition-colors shadow-lg shadow-orange-secondary/30 flex items-center gap-3 w-full justify-center md:w-auto">
                Send Message <i class="fas fa-paper-plane"></i>
              </button>
            </form>
          </div>
          
          <!-- Right: Contact Information Panel -->
          <div class="w-full lg:w-2/5 bg-teal-primary dark:bg-slate-800 p-10 md:p-16 text-white relative overflow-hidden flex flex-col justify-between">
            <div class="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            
            <div class="relative z-10">
              <h3 class="text-2xl font-bold uppercase tracking-tight mb-8">Direct Contacts</h3>
              
              <ul class="space-y-8">
                <li class="flex items-start gap-4">
                  <div class="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                    <i class="fas fa-map-marker-alt text-lg"></i>
                  </div>
                  <div>
                    <h4 class="text-xs font-bold uppercase tracking-widest text-white/70 mb-1">Global HQ</h4>
                    <p class="text-sm font-medium">442 Global Avenue<br/>Metropolis City, NY 10001</p>
                  </div>
                </li>
                
                <li class="flex items-start gap-4">
                  <div class="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                    <i class="fas fa-envelope text-lg"></i>
                  </div>
                  <div>
                    <h4 class="text-xs font-bold uppercase tracking-widest text-white/70 mb-1">Email Support</h4>
                    <p class="text-sm font-medium"><a href="mailto:info@worldvoice.edu" class="hover:text-orange-secondary transition-colors">info@worldvoice.edu</a><br/><a href="mailto:support@worldvoice.edu" class="hover:text-orange-secondary transition-colors">support@worldvoice.edu</a></p>
                  </div>
                </li>
                
                <li class="flex items-start gap-4">
                  <div class="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                    <i class="fas fa-phone-alt text-lg"></i>
                  </div>
                  <div>
                    <h4 class="text-xs font-bold uppercase tracking-widest text-white/70 mb-1">Phone</h4>
                    <p class="text-sm font-medium">Admissions: +1 (555) 987-6543<br/>IT Support: +1 (555) 987-6544</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div class="relative z-10 mt-12 pt-8 border-t border-white/20">
              <h4 class="text-xs font-bold uppercase tracking-widest text-white/70 mb-4">Connect With Us</h4>
              <div class="flex gap-4">
                <a href="#" class="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-orange-secondary transition-colors"><i class="fab fa-facebook-f"></i></a>
                <a href="#" class="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-orange-secondary transition-colors"><i class="fab fa-twitter"></i></a>
                <a href="#" class="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-orange-secondary transition-colors"><i class="fab fa-instagram"></i></a>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>

    `;
    
    content = content.substring(0, startIndex) + newSection + content.substring(endIndex);
    fs.writeFileSync(filePath, content, 'utf-8');
    console.log('Successfully updated contact.html layout');
} else {
    console.log('Could not find tags in contact.html');
}
