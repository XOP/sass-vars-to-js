import fs from 'fs';

function collectDeclarations (filePath) {
    const declarationRegexp = new RegExp(/(?:\$)([\w-]+)(?:\:)(?:\s)+(.+)(?:\;)/);
    const sassFile = fs.readFileSync(filePath, 'utf8');

    return sassFile.match(declarationRegexp);
}

export default collectDeclarations;
