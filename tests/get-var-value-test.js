var TEST_NAME = 'get-var-value';

var test = require('tape');
var getVarValue = require('../dist/_get-var-value.js');

test(TEST_NAME, function (t) {

    var values;
    var name;

    name = '$color';

    t.equal(
        getVarValue(name, values),
        undefined,

        'should return undefined for undefined values'
    );

    t.equal(
        getVarValue(name),
        undefined,

        'should return undefined if only 1 argument passed'
    );

    t.equal(
        getVarValue(),
        undefined,

        'should return undefined if no arguments passed'
    );

    values = {};

    t.equal(
        getVarValue(name, values),
        null,

        'should return null for empty values'
    );

    values = [];

    t.equal(
        getVarValue(name, values),
        undefined,

        'should return undefined if values have wrong type'
    );

    name = 256;
    values = {};

    t.equal(
        getVarValue(name, values),
        undefined,

        'should return undefined if name has wrong type'
    );

    name = '$color';
    values = {
        background: '#fff'
    };

    t.equal(
        getVarValue(name, values),
        null,

        'should return null if value is not found'
    );

    values = {
        background: '#fff',
        color: '#000',
        font: '12px/1.5 Arial'
    };

    t.equal(
        getVarValue(name, values),
        '#000',

        'should return the value from the hashmap'
    );

    t.end();
});
