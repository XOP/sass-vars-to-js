var TEST_NAME = 'parse-declaration';

var test = require('tape');
var parseDeclarations = require('../dist/_parse-declaration.js');

test(TEST_NAME, function (t) {

    var declarations = [
        '$color: #fff;'
    ];

    declarations.forEach(function (declaration) {
        var result = parseDeclarations(declaration);

        t.ok(
            result,

            'should get result'
        );

        t.equal(
            Object.prototype.toString.call(result),
            '[object Object]',

            'should return object'
        );

        t.ok(
            result.key && result.value,

            'should return key-value pair'
        );

        t.ok(
            result.key.indexOf('/[\s\n\t]+/') === -1,

            'key should not contain whitespace'
        );

        t.ok(
            result.value.indexOf('/[\s\n\t]+/') === -1,

            'value should not contain whitespace'
        );

    });

    t.end();
});
