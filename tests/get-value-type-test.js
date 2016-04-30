var TEST_NAME = 'get-value-type';

var test = require('tape');
var getValueType = require('../dist/_get-value-type.js');

test(TEST_NAME, function (t) {

    var value;

    value = '#fff';

    t.ok(
        getValueType(value),

        'should get result'
    );

    t.equal(
        getValueType(value),
        'value',

        'should return "value" type'
    );

    value = '$color';

    t.equal(
        getValueType(value),
        'var',

        'should return "var" type'
    );

    value = '$color-rgba';

    t.equal(
        getValueType(value),
        'var',

        'should return "var" type'
    );

    value = '$TEXT_TRANSFORM';

    t.equal(
        getValueType(value),
        'var',

        'should return "var" type'
    );

    // todo: expression type
    value = '$margin - $padding';

    t.equal(
        getValueType(value),
        'value',

        'should return "var" type'
    );

    t.end();
});
