import fs from 'fs';

function getFileLines (filePath) {
    let fileLines = [];

    fileLines = fs.readFileSync(filePath, 'utf8');
    fileLines = fileLines.split('\n');

    return fileLines;
}

export default getFileLines;
