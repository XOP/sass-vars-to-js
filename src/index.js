import path from 'path';
import fs from 'fs';

import collectDeclarations from './_collect-declarations';
import parseDeclaration from './_parse-declaration';
import getValueType from './_get-value-type.js';

function message (text) {
    console.log(text);
}

function sassVars (filePath) {
    const declarations = collectDeclarations(filePath);
    let variables = {};

    if (!declarations.length) {
        message('Warning: Zero declarations found');
        return;
    }

    declarations.forEach(function (declaration) {
        const parsedDeclaration = parseDeclaration(declaration);
        const varName = parsedDeclaration.key;
        let varValue = parsedDeclaration.value;

        if (getValueType(varValue) === 'var') {
            const varName = varValue;

            varValue = variables[varName] || null;
            if (!varValue) {
                message(`Warning: Null value for variable $${varName}`);
            }
        }

        variables[varName] = varValue;
    });

    return variables;
}

export default sassVars;
