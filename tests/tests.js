var path = require('path');

var test = require('tape');
var converter = require('../sass-vars-to.js').default;

test('parsing plain vars', function (t) {

    var sassFilePath = path.resolve(__dirname, 'plain-vars.scss');
    var result = converter(sassFilePath);

    console.log(result.color);

    t.ok(
        result,

        'parsing is ok'
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
