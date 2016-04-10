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

        'should get value by property name (simple)'
    );

    t.equal(
        result['color-rgba'],
        'rgba(255,255,255,1)',

        'should get value by property name (complex)'
    );

    t.equal(
        typeof(result.color),
        'string',

        'should return String for String variable'
    );

    t.equal(
        typeof(result.columns),
        'string',

        'should return String value for Number variable'
    );

    t.equal(
        result['line-height-h1'],
        '1.1',

        'should get value with syntax [var]:[value];'
    );

    t.equal(
        result['line-height-h2'],
        '1.2',

        'should get value with syntax [var] :[value];'
    );

    t.equal(
        result['line-height-h3'],
        '1.3',

        'should get value with syntax [var] : [value];'
    );

    t.equal(
        result['line-height-h4'],
        '1.4',

        'should get value with syntax [var]: [value] ;'
    );

    t.equal(
        result['line-height-h5'],
        '1.5',

        'should get value with semicolon (;) on the next line'
    );

    t.equal(
        result['line-height-h6'],
        '1.6',

        'should get value with semicolon (;) on some line below'
    );

    t.equal(
        result['z_index__modal'],
        '1000',

        'should get value with variable in snake__case'
    );

    t.equal(
        result['opacity--heavy'],
        '.4',

        'should get value with variable in kebab--case'
    );

    t.equal(
        result['TEXT_TRANSFORM'],
        'uppercase',

        'should get value with variable in CAPS'
    );

    t.equal(
        result['offset-l'],
        '1rem',

        'should get value with syntax: ;[var]: [value]'
    );

    t.equal(
        result['offset-xl'],
        '2rem',

        'should get value with syntax: ; [var]: [value]'
    );

    t.equal(
        result['offset-xxl'],
        '3rem',

        'should get value with syntax: [space]; [var]: [value]'
    );

    t.end();
});
