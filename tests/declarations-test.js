var TEST_NAME = 'declarations';

var path = require('path');

var test = require('tape');
var converter = require('../index.js').default;

test(TEST_NAME, function (t) {

    var sassFilePath = path.resolve(__dirname, TEST_NAME + '.scss');
    var result = converter(sassFilePath);

    t.ok(
        result,

        'should get result'
    );

    t.equal(
        Object.prototype.toString.call(result),
        '[object Array]',

        'should return Array of declarations'
    );

    t.equal(
        result.length,
        18,

        'should return exact number of declarations'
    );

    t.end();
});
