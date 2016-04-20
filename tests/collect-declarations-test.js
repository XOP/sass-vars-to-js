var TEST_NAME = 'collect-declarations';

var path = require('path');

var test = require('tape');
var collectDeclarations = require('../compiled/_collect-declarations.js').default;

test(TEST_NAME, function (t) {

    var sassFilePath = path.resolve(__dirname, 'plain-vars.scss');
    var result = collectDeclarations(sassFilePath);

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
