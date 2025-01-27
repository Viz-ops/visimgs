const fs = require('fs');
const path = require('path');

const currentDir = __dirname;
const outputFile = path.join(currentDir, 'all.json');

// Function to get all files in the current directory excluding .git and the script itself
function getFiles() {
    const files = fs.readdirSync(currentDir);
    return files.filter(file => {
        // Exclude directories, .git and the script itself
        const fullPath = path.join(currentDir, file);
        return fs.statSync(fullPath).isFile() &&
               file !== '.git' &&
               file !== 'list.cjs' &&
               file !== 'all.json'
    });
}

const files = getFiles();

// Write the file names to all.json as an array
fs.writeFileSync(outputFile, JSON.stringify(files, null, 2));
