import path from 'path';
import fs from 'fs';

function sassVars (filePath) {
    const declarationRegexp = new RegExp(/(?:\$)([\w-]+)(?:\:)(?:\s)+(.+)(?:\;)/);
    const variableRegexp = new RegExp(/(?:\$)([\w-]+)(?:[\s\;]*)/);

    let sassFile = fs.readFileSync(filePath, 'utf8');
    let vars = {};

    sassFile = sassFile.split('\n');

    sassFile.map(line => {
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
}

export default sassVars;
