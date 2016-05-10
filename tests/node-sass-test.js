var TEST_NAME = 'node-sass';

var test = require('tape');

var getExpressionValue = require('../dist/_get-expression-value.js');

test(TEST_NAME, function (t) {

    var data;

    t.equal(
        getExpressionValue(),
        undefined,

        'should return undefined if no arguments provided'
    );

    t.equal(
        getExpressionValue('color'),
        undefined,

        'should return undefined if no expression provided'
    );

    data = '' +
        '$color: #fce;' +
        '$color-dark: darken($color, 50%);';

    t.equal(
        getExpressionValue(1000, data),
        undefined,

        'should return undefined if arguments types are invalid'
    );

    t.equal(
        getExpressionValue('color-dark', data),
        '#cc0088',

        'should return sass function result'
    );

    data = '' +
        '$color: #fce;' +
        '$color-dark: darken($color, 50%);' +
        '$color-darker: darken($color, 75%);';

    t.equal(
        getExpressionValue('color-dark', data),
        '#cc0088',

        'should return sass function result'
    );

    t.equal(
        getExpressionValue('color-darker', data),
        '#4d0033',

        'should return sass function result'
    );

    t.end();
});
