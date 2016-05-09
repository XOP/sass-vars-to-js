/**
 * Parses variable declaration
 * Returns $key: $value pair
 * @param declaration
 * @returns {{key: (*|string), value: (*|string)}}
 */
function parseDeclaraion (declaration) {
    const keyRegexp = /(?:\$)([\w-]+)(?:[\s\n\r\t])*(?::)/;
    const valueRegexp = /(?::)(?:[\s\n\r\t])*(.+)(?:[\s\n\r\t])*(?:;)/;

    const matchKey = declaration.match(keyRegexp);
    const key = matchKey[1].trim();

    const matchValue = declaration.match(valueRegexp);
    const value = matchValue[1].trim();

    return { key, value };
}

export default parseDeclaraion;
