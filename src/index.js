import path from 'path';
import fs from 'fs';

import collectDeclarations from './_collect-declarations';
import parseDeclaration from './_parse-declaration';

function sassVars (filePath) {
    const declarations = collectDeclarations(filePath);
    let variables = {};

    if (!declarations.length) {
        console.log('Warning: Zero declarations found');
        return;
    }

    declarations.forEach(function (declaration) {
        const parsedDeclaration = parseDeclaration(declaration);

        variables[parsedDeclaration.key] = parsedDeclaration.value;
    });

    return variables;

    /*

     const variableRegexp = new RegExp(/(?:\$)([\w-]+)(?:[\s\;]*)/);

     // there's variable used in value
     // have to parse the value as well
     if (~val.indexOf('$')) {
     const innerVar = val.match(variableRegexp)[1];
     const innerVarValue = vars[innerVar];

     val = val.replace('$' + innerVar, innerVarValue);

     */
}

export default sassVars;
