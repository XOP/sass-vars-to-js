# sass-vars-to-js

> variables.scss to [variables Object] converter

[![npm version](https://badge.fury.io/js/sass-vars-to-js.svg)](https://badge.fury.io/js/sass-vars-to-js) [![dependencies](https://david-dm.org/XOP/sass-vars-to-js.svg)](https://david-dm.org/stewiekillsloiss/sass-vars-to-js) [![devDependecies](https://david-dm.org/XOP/sass-vars-to-js/dev-status.svg)](https://david-dm.org/XOP/sass-vars-to-js#info=devDependencies)

## About

Sometimes you just need to use SASS variables in JS without incorporating complex logic.
And no CSS-module-specific logic behind this.


## Installation and Changes

Installation is straightforward:
```
$ npm install --save-dev sass-vars-to-js
```

Run tests:
```
$ npm test
```

Compile commonjs version with [babel](https://babeljs.io/):
```
$ npm run build
```


## Usage

There are two ways of requiring the module:

By default requiring module gets the commonjs version:
```js
var converter = require('node_modules/sass-vars-to-js');
```

If you prefer (by whatever reasons) ES6 version, you can also try:
```js
import converter from 'node_modules/sass-vars-to-js/src'
```

Function accepts string - path to a SASS file, containing variables.
It returns the object, very similar to the variable definition syntax:

**variables.scss**
```scss
$color-brand-primary: #1711e2;
$color-brand-secondary: #fd0f79;

$footer-bg-color: $color-brand-primary;
```

**colors.js**
```js
import converter from 'sass-vars-to-js';

const variables = converter(path/to/variables.scss);

// {
//     'color-brand-primary': '#1711e2',
//     'color-brand-secondary': '#fd0f79',
//     'footer-bg-color': '#1711e2'
// }

const colors = {
    brandPrimary: variables['color-brand-primary'],
    brandSecondary: variables['color-brand-secondary']
};
```


## Limits of use

Please be aware of current version (0.x - 1.x) limitations:

- maps and other complex stuff is not supported
- sass expressions not supported
- sass functions not supported


## License: [MIT](LICENSE)
