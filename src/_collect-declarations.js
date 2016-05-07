import fs from 'fs';

/**
 * Parses file
 * Returns declarations array
 * @param filePath
 * @returns {Array|{index: number, input: string}|*|Array}
 */
function collectDeclarations (filePath) {
    const declarationRegexp = new RegExp(/(?:\$)([\w-]+)(?:[\s\n\r\t])*(?:\:)(?:[\s\n\r\t])*(.+)(?:[\s\n\r\t])*(?:\;)/gm);
    const fileSource = fs.readFileSync(filePath, 'utf8');

    return fileSource.match(declarationRegexp);
}

export default collectDeclarations;
