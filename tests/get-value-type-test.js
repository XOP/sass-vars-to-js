var TEST_NAME = 'get-value-type';

var test = require('tape');
var getValueType = require('../dist/_get-value-type.js');

test(TEST_NAME, function (t) {

    var values;

    values = [
        '#fff'
    ];

    t.ok(
        getValueType(values[0]),

        'should get result'
    );

    values.forEach(function (value) {
        t.equal(
            getValueType(value),
            'value',

            'should return "value" type'
        );
    });

    values = [
        '$color',
        '$color-rgba',
        '$TEXT_TRANSFORM'
    ];

    values.forEach(function (value) {
        t.equal(
            getValueType(value),
            'var',

            'should return "var" type'
        );
    });

    // TODO: expression type

    values = [
        '$margin / 2',
        '$margin * 2',
        '$margin + $margin',
        '$margin - $margin'
    ];

    values.forEach(function (value) {
        t.notEqual(
            getValueType(value),
            'var',

            'should not return "var" type'
        );
    });

    t.end();
});
