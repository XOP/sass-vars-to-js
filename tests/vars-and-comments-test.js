var TEST_NAME = 'vars-and-comments';

var path = require('path');

var test = require('tape');
var converter = require('../index.js');

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

        'should get value next to block comment'
    );

    t.equal(
        result['color-rgba'],
        'rgba(255,255,255,1)',

        'should get value next to multiline block comment'
    );

    t.equal(
        result.font,
        'Arial, \'Helvetica Neue\', sans-serif',

        'should get value next to inline comment'
    );

    t.equal(
        result['font-size'],
        '1.8em',

        'should get value next to multiline comment'
    );

    t.equal(
        result['line-height-regular'],
        '1',

        'should get value along with block comment'
    );

    t.equal(
        result['line-height-loose'],
        '2',

        'should get value along with inline comment'
    );

    t.end();
});
