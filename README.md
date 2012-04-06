# coffee-script loader for webpack

## Usage

``` javascript
var exportsOfFile = require("coffee!./file.coffee");
// => return exports of executed and compiled file.coffee
```

Don't forget to polyfill `require` if you want to use it in node.
See `webpack` documentation.

## License

MIT (http://www.opensource.org/licenses/mit-license.php)