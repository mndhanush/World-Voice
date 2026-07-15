import os
import glob

html_files = glob.glob('d:/GrowwPark projects/WorldVoice/*.html')

target_str = '<img src="assets/logo.png" alt="WorldVoice Logo" class="h-10 xl:h-12 w-auto">'
replacement_str = '<img src="assets/logo.png" alt="WorldVoice Logo" class="h-12 xl:h-16 w-auto">'

for file in html_files:
    with open(file, 'r', encoding='utf-8') as f:
        content = f.read()
    
    if target_str in content:
        new_content = content.replace(target_str, replacement_str)
        with open(file, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f"Updated logo size in {os.path.basename(file)}")
    else:
        print(f"No match found in {os.path.basename(file)}")
