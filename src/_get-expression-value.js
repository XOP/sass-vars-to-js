import path from 'path';

import is from 'is';
import sass from 'node-sass';

import message from './utils/_message.js';

/**
 * Resolve variable value
 * By variable name and previous code
 * @param varName
 * @param scssExpression
 */
function getExpressionValue (varName, scssExpression) {
    if (is.undef(scssExpression) || is.args.empty(arguments)) {
        message('Error: Missing arguments');
        return undefined;
    }

    if (!is.string(varName) || !is.string(scssExpression)) {
        message('Error: Check arguments type');
        return undefined;
    }

    if (!~scssExpression.indexOf('$')) {
        message('Warning: Check scssExpression to contain valid code')
    }

    // print the interpolated value in comment string
    // /*#{$varName}*/ --> /*varValue*/
    const scssContent = `${scssExpression}/*#{$${varName}}*/`;

    const sassResult = sass.renderSync({
        data: scssContent
    });

    const cssResult = sassResult.css.toString();

    return extractExpressionValue(cssResult);
}

/**
 * Parse calculated variable value
 * From CSS comment
 * @param css
 * @returns {*}
 */
function extractExpressionValue (css) {

    // parse the comment string:
    // /*varValue*/ --> varValue
    const valueRegExp = /(?:\/\*)(.+)(?:\*\/)/;
    const value = css.match(valueRegExp)[1];

    if (!value) {
        message('Warning: empty value');
    }

    return value;
}

export default getExpressionValue;
