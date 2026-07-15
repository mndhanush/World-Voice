const { execSync } = require('child_process');
try {
    const output = execSync('git show 9cb8be3:login.html').toString();
    const scriptStart = output.lastIndexOf('  <script>');
    console.log(output.substring(scriptStart, scriptStart + 500));
} catch (e) {
    console.error(e);
}
