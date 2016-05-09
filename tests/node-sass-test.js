var TEST_NAME = 'node-sass';

var test = require('tape');
var sass = require('../node_modules/node-sass');

/*
    FIXME: move to dedicated file
 */
function extractExpressionValue (css) {

    // parse the comment string:
    // /*varValue*/ --> varValue
    var valueRegExp = /(?:\/\*)(.+)(?:\*\/)/;
    var value = css.match(valueRegExp)[1];

    return value;
}

/*
    FIXME: move to dedicated file
 */
function resolveExpressionValue (varName, scssString) {

    // print the interpolated value in comment string
    // /*#{$varName}*/ --> /*varValue*/
    var scssContent = scssString + '' +
        '/*' + '#{$' + varName + '}*/';

    var sassResult = sass.renderSync({
        data: scssContent
    });

    var cssResult = sassResult.css.toString();

    return extractExpressionValue(cssResult);
}

test(TEST_NAME, function (t) {

    var data, result;

    data = '' +
        '$color: #fce;' +
        '$color-dark: darken($color, 50%);';

    t.equal(
        resolveExpressionValue('color-dark', data),
        '#cc0088',

        'should return sass function result'
    );

    data = '' +
        '$color: #fce;' +
        '$color-dark: darken($color, 50%);' +
        '$color-darker: darken($color, 75%);';

    t.equal(
        resolveExpressionValue('color-dark', data),
        '#cc0088',

        'should return sass function result'
    );

    t.equal(
        resolveExpressionValue('color-darker', data),
        '#4d0033',

        'should return sass function result'
    );

    t.end();
});
