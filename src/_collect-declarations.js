import fs from 'fs';

function collectDeclarations (filePath) {
    const declarationRegexp = new RegExp(/(?:\$)([\w-]+)(?:[\s\n\r\t])*(?:\:)(?:[\s\n\r\t])*(.+)(?:[\s\n\r\t])*(?:\;)/gm);
    const fileSource = fs.readFileSync(filePath, 'utf8');

    return fileSource.match(declarationRegexp);
}

export default collectDeclarations;
