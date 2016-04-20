import path from 'path';
import fs from 'fs';

import collectDeclarations from './_collect-declarations';

function sassVars (filePath) {
    const declarations = collectDeclarations(filePath);

    console.log(declarations);

    return declarations;

    /*
     const variableRegexp = new RegExp(/(?:\$)([\w-]+)(?:[\s\;]*)/);

     let vars = {};

    sassFileLines.map(line => {
        console.log('=================');
        console.log('LOG line: ' + line);

        if (~line.indexOf('$')) {

            // parsing string
            // $property: val;
            const properties = line.match(declarationRegexp);
            console.log('LOG properties: ' + properties);

            if (!properties) {
                return;
            }

            const key = properties[1];
            console.log('LOG key: ' + key);

            let val = properties[2];
            console.log('LOG val: ' + val);

            // trim extra spaces
            val = val.trim();

            // there's variable used in value
            // have to parse the value as well
            if (~val.indexOf('$')) {
                const innerVar = val.match(variableRegexp)[1];
                const innerVarValue = vars[innerVar];

                val = val.replace('$' + innerVar, innerVarValue);
            }

            vars[key] = val;
        }
    });

    return vars;

     */
}

export default sassVars;
