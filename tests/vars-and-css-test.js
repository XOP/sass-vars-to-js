var TEST_NAME = 'vars-and-css';

var path = require('path');

var test = require('tape');
var converter = require('../sass-vars-to.js').default;

test(TEST_NAME, function (t) {

    var sassFilePath = path.resolve(__dirname, TEST_NAME + '.scss');
    var result = converter(sassFilePath);

    t.ok(
        result,

        'should get result'
    );

    t.equal(
        result.color,
        '#fff',

        'should get value despite the regular usage'
    );

    t.equal(
        result['color-rgba'],
        'rgba(255,255,255,1)',

        'should get value despite the usages in @-rule'
    );

    t.equal(
        result.font,
        'Arial, \'Helvetica Neue\', sans-serif',

        'should get value despite the nesting'
    );

    t.equal(
        result['font-size'],
        '1.8em',

        'should get value despite the vars order in styles'
    );

    t.end();
});
