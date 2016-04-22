# sass-vars-to-js

## About

Sometimes you just need to use SASS variables in JS without incorporating complex logic.
And no CSS-module-specific logic behind this.

Typical usecase.

in variables.scss:
```scss
$color-brand-primary: #1711e2;
$color-brand-secondary: #fd0f79;
```

in colors.js:
```js
import converter from 'sass-vars-to-js';

const variables = converter(path/to/variables.scss);

const colors = {
    brandPrimary: variables['color-brand-primary'],
    brandSecondary: variables['color-brand-secondary']
};
```


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

There are two ways of using the module:

By default requiring module gets the commonjs version:
```js
var converter = require('node_modules/sass-vars-to-js');
```

If you prefer (by whatever reasons) ES6 version, you can also try:
```js
import converter from 'node_modules/sass-vars-to-js/src'
```


## Limits of use

Please be aware of current version (1.x) limitations:

- maps and other complex stuff is not supported
- variables in variables not supported


## License: [MIT](LICENSE)
