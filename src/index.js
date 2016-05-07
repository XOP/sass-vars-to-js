import message from './utils/_message';
import collectDeclarations from './_collect-declarations';
import parseDeclaration from './_parse-declaration';
import getValueType from './_get-value-type';
import getVarValue from './_get-var-value';

/**
 * Takes file.scss as an argument
 * Returns parsed variables hash-map
 * @param filePath
 * @returns {{}}
 */
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
        const valueType = getValueType(varValue);

        /*
         * $key: $value;
         */
        if (valueType === 'var') {
            const localVarName = varValue;
            varValue = getVarValue(localVarName, variables);

            if (!varValue) {
                message(`Warning: Null value for variable ${localVarName}`);
            }
        }

        /*
         * $key: ($value-1 + $value-2) * $value-3 ... ;
         */
        if (valueType === 'expression') {
            // todo
        }

        /*
         * $key: value;
         */
        variables[varName] = varValue;
    });

    return variables;
}

export default sassVars;
