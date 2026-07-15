const { execSync } = require('child_process');
const fs = require('fs');

const filesToRestore = [
    'login.html',
    'register.html',
    'user-dashboard.html',
    'admin-dashboard.html'
];

for (const file of filesToRestore) {
    try {
        // Get the original file from git commit 9cb8be3
        const originalContent = execSync(`git show 9cb8be3:${file}`).toString();
        
        // Find where the script starts in the original file
        const scriptStartOriginal = originalContent.lastIndexOf('  <script>');
        if (scriptStartOriginal !== -1) {
            const originalScript = originalContent.substring(scriptStartOriginal);
            
            // Get the current file content
            let currentContent = fs.readFileSync(file, 'utf-8');
            
            // Find where the script starts in the current file
            const scriptStartCurrent = currentContent.lastIndexOf('  <script>');
            if (scriptStartCurrent !== -1) {
                // Replace the broken script with the original one
                currentContent = currentContent.substring(0, scriptStartCurrent) + originalScript;
                
                fs.writeFileSync(file, currentContent, 'utf-8');
                console.log(`Successfully restored script in ${file}`);
            }
        }
    } catch (e) {
        console.error(`Error restoring ${file}:`, e.message);
    }
}
