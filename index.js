import path from 'path';
import fs from 'fs';

import strip from 'strip-comments';

function sassVars (filePath) {
    let sassFile = fs.readFileSync(filePath, 'utf8');
    let vars = {};

    sassFile = sassFile.split('\n');

    sassFile.map(line => {
        console.log('=================');
        console.log('LOG line: ' + line);

        if (~line.indexOf('$')) {

            // parsing string
            // $property: val;
            var properties = line.match(/(?:\$)([\w-]+)(?:\:)(?:\s)+(.+)(?:\;)/);
            console.log('LOG properties: ' + properties);

            if (!properties) {
                return;
            }

            var key = properties[1];
            console.log('LOG key: ' + key);

            var val = properties[2];
            console.log('LOG val: ' + val);

            // there's variable used in value
            // have to parse the value as well
            if (~val.indexOf('$')) {
                var innerVar = val.match(/(?:\$)([\w-]+)(?:[\s\;]*)/)[1];
                var innerVarValue = vars[innerVar];

                val = val.replace('$' + innerVar, innerVarValue);
            }

            vars[key] = val;
        }
    });

    return vars;
}

export default sassVars;
