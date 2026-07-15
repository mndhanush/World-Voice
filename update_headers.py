import os
import re

dir_path = r"d:\GrowwPark projects\WorldVoice"

def process_html_file(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    original_content = content
    
    # 1. Replace Logo
    logo_pattern = re.compile(r'<!-- Logo -->.*?<div class="flex flex-col">.*?</span>\s*</div>\s*</a>\s*</div>', re.DOTALL)
    new_logo = '''<!-- Logo -->
        <div class="flex-shrink-0 pr-2 xl:pr-4">
          <a href="index.html" class="flex items-center gap-3">
            <img src="assets/logo.png" alt="WorldVoice Logo" class="h-10 xl:h-12 w-auto">
          </a>
        </div>'''
    content = logo_pattern.sub(new_logo, content)

    # 2. Update Desktop Menu to remove hidden 2xl:
    content = content.replace('<div class="hidden 2xl:flex items-center justify-center flex-1">', '<div class="flex items-center justify-center flex-1">')
    
    # 3. Update Desktop Actions & Toggles
    # Look for the block
    actions_start = content.find('<!-- Desktop Actions & Toggles -->')
    mobile_start = content.find('<!-- Mobile Menu Button & Toggles -->')
    
    if actions_start != -1 and mobile_start != -1:
        actions_block = content[actions_start:mobile_start]
        
        # Extract individual components
        login_match = re.search(r'<a href="login.html".*?>Login</a>', actions_block, re.DOTALL)
        register_match = re.search(r'<a href="register.html".*?>\s*Register\s*</a>', actions_block, re.DOTALL)
        theme_match = re.search(r'<!-- Theme Toggle -->\s*<button id="theme-toggle".*?</button>', actions_block, re.DOTALL)
        rtl_match = re.search(r'<!-- RTL Toggle -->\s*<button id="rtl-toggle".*?</button>', actions_block, re.DOTALL)
        
        if login_match and register_match and theme_match and rtl_match:
            new_actions = f'''<!-- Desktop Actions & Toggles -->
        <div class="flex items-center gap-1.5 xl:gap-3 flex-shrink-0">
          {rtl_match.group(0)}
          
          {theme_match.group(0)}

          <div class="h-6 w-px bg-gray-300 dark:bg-gray-700 mx-1"></div>

          {login_match.group(0).replace('transition-all duration-300"', 'transition-all duration-300 whitespace-nowrap"')}
          {register_match.group(0).replace('transition-all duration-300"', 'transition-all duration-300 whitespace-nowrap"')}
        </div>
        
        '''
            content = content[:actions_start] + new_actions + content[mobile_start:]

    # 4. Remove Mobile Menu & Button entirely
    # The structure ends with </nav>
    nav_end = content.find('</nav>')
    if mobile_start != -1 and nav_end != -1:
        # We need to preserve the closing </div> of the first flex container
        # Let's find the </div> right before Mobile Menu Dropdown
        dropdown_start = content.find('<!-- Mobile Menu Dropdown -->', mobile_start)
        if dropdown_start != -1:
            # Reconstruct the end of the nav
            # We want to replace from mobile_start up to nav_end with </div>\n    </nav>
            content = content[:mobile_start] + '</div>\n    </nav>' + content[nav_end+len('</nav>'):]

    if content != original_content:
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"Updated {file_path}")
    else:
        print(f"No changes in {file_path}")

for file in os.listdir(dir_path):
    if file.endswith('.html'):
        process_html_file(os.path.join(dir_path, file))
