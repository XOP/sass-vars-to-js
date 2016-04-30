var TEST_NAME = 'complex-vars';

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
        result['color-primary'],
        '#000',

        'should return value of existing variable'
    );

    t.equal(
        result['color-tertiary'],
        null,

        'should return null for unknown variable'
    );

    t.equal(
        result['color-accent'],
        null,

        'should return null for later coming variable'
    );

    t.equal(
        result['color-yellow'],
        '#ee3',

        'should return value for later coming variable'
    );

    t.notEqual(
        result['offset-s'],
        '10px',

        'should not return variable value in expression'
    );

    // todo: update test
    t.notEqual(
        result['offset-s'],
        '5px',

        'should not return result of calculation'
    );

    // todo: update test
    t.notEqual(
        result['offset-l'],
        '20px',

        'should not return result of calculation'
    );

    t.end();
});
