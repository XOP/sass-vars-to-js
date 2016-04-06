var TEST_NAME = 'plain-vars';

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

        'should be able to get value by property name (simple)'
    );

    t.equal(
        result['color-rgba'],
        'rgba(255,255,255,1)',

        'should be able to get value by property name (complex)'
    );

    t.end();
});
