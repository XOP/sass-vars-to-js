var TEST_NAME = 'collect-declarations';

var path = require('path');

var test = require('tape');
var collectDeclarations = require('../dist/_collect-declarations.js');

test(TEST_NAME, function (t) {

    var sassFilePath = path.resolve(__dirname, 'plain-vars.scss');
    var result = collectDeclarations(sassFilePath);

    var emptySassFilePath = path.resolve(__dirname, 'no-vars.scss');
    var no_result = collectDeclarations(emptySassFilePath);

    t.ok(
        result,

        'should get result'
    );

    t.equal(
        no_result,
        null,

        'should get null'
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
