<div align="center">
  <img width="160" height="160" src="https://cdn.worldvectorlogo.com/logos/coffeescript.svg">
  <a href="https://github.com/webpack/webpack">
    <img width="200" height="200" hspace="20"
      src="https://webpack.js.org/assets/icon-square-big.svg">
  </a>
</div>

[![npm][npm]][npm-url]
[![node][node]][node-url]
[![deps][deps]][deps-url]
[![tests][tests]][tests-url]
[![coverage][cover]][cover-url]
[![chat][chat]][chat-url]
[![size][size]][size-url]

# coffee-loader

Compile [CoffeeScript](https://coffeescript.org/) to JavaScript.

## Getting Started

To begin, you'll need to install `coffee-loader`:

```console
npm install --save-dev coffee-loader
```

Then add the plugin to your `webpack` config. For example:

**file.coffee**

```coffee
# Assignment:
number   = 42
opposite = true

# Conditions:
number = -42 if opposite

# Functions:
square = (x) -> x * x

# Arrays:
list = [1, 2, 3, 4, 5]

# Objects:
math =
  root:   Math.sqrt
  square: square
  cube:   (x) -> x * square x

# Splats:
race = (winner, runners...) ->
  print winner, runners

# Existence:
alert "I knew it!" if elvis?

# Array comprehensions:
cubes = (math.cube num for num in list)
```

**webpack.config.js**

```js
module.exports = {
  module: {
    rules: [
      {
        test: /\.coffee$/,
        loader: 'coffee-loader',
      },
    ],
  },
};
```

Alternative usage:

```js
import coffee from 'coffee-loader!./file.coffee';
```

And run `webpack` via your preferred method.

## Options

|                   Name                    |    Type     |      Default       | Description                                 |
| :---------------------------------------: | :---------: | :----------------: | :------------------------------------------ |
| **[`coffeeScriptOptions`](#sassoptions)** | `{Object}`  |        `{}`        | Options for CoffeeScript.                   |
|       **[`sourceMap`](#sourcemap)**       | `{Boolean}` | `compiler.devtool` | Enables/Disables generation of source maps. |

### `coffeeScriptOptions`

Type: `Object`
Default: `{}`

Options for CoffeeScript. All options you can find [here](https://coffeescript.org/).

> ℹ️ The `sourceMap` option takes a value from the **[`sourceMap`](#sourcemap)** option and based on `compiler.devtool` value. The option value will be ignored.

> ℹ️ The `filename` option takes a value from webpack loader API. The option value will be ignored.

**webpack.config.js**

```js
module.exports = {
  module: {
    rules: [
      {
        test: /\.coffee$/,
        loader: 'coffee-loader',
        options: {
          coffeeScriptOptions: {
            bare: false,
            transpile: {
              presets: ['@babel/env'],
            },
          },
        },
      },
    ],
  },
};
```

### `sourceMap`

Type: `Boolean`
Default: depends on the `compiler.devtool` value

Enables/Disables generation of source maps.

By default generation of source maps depends on the [`devtool`](https://webpack.js.org/configuration/devtool/) option.

**webpack.config.js**

```js
module.exports = {
  module: {
    rules: [
      {
        test: /\.coffee$/,
        loader: 'coffee-loader',
        options: {
          sourceMap: false,
        },
      },
    ],
  },
};
```

## Contributing

Please take a moment to read our contributing guidelines if you haven't yet done so.

[CONTRIBUTING](./.github/CONTRIBUTING.md)

## License

[MIT](./LICENSE)

[npm]: https://img.shields.io/npm/v/coffee-loader.svg
[npm-url]: https://npmjs.com/package/coffee-loader
[node]: https://img.shields.io/node/v/coffee-loader.svg
[node-url]: https://nodejs.org
[deps]: https://david-dm.org/webpack-contrib/coffee-loader.svg
[deps-url]: https://david-dm.org/webpack-contrib/coffee-loader
[tests]: https://github.com/webpack-contrib/coffee-loader/workflows/coffee-loader/badge.svg
[tests-url]: https://github.com/webpack-contrib/coffee-loader/actions
[cover]: https://codecov.io/gh/webpack-contrib/coffee-loader/branch/master/graph/badge.svg
[cover-url]: https://codecov.io/gh/webpack-contrib/coffee-loader
[chat]: https://badges.gitter.im/webpack/webpack.svg
[chat-url]: https://gitter.im/webpack/webpack
[size]: https://packagephobia.now.sh/badge?p=coffee-loader
[size-url]: https://packagephobia.now.sh/result?p=coffee-loader
