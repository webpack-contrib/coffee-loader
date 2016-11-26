[![npm][npm]][npm-url]
[![node][node]][node-url]
[![deps][deps]][deps-url]
[![tests][tests]][tests-url]
[![coverage][cover]][cover-url]
[![chat][chat]][chat-url]

<div align="center">
  <img width="160" height="160"
    src="https://cdn.worldvectorlogo.com/logos/coffeescript.svg">
  <a href="https://github.com/webpack/webpack">
    <img width="200" height="200" hspace="20"
      src="https://webpack.js.org/assets/icon-square-big.svg">
  </a>
  <h1>Coffee Loader</h1>
  <h3>CoffeeScript for webpack</h3>
</div>

<h2 align="center">Install</h2>

```bash
npm install --save-dev coffee-loader
```

<h2 align="center">Usage</h2>

There are three ways to use coffee-loader in your application.

### Configuration (recommended)

**webpack.config.js**
```js
module.exports = {
  module: {
    rules: [
      {
        test: /\.coffee$/,
        use: [ 'coffee-loader' ]
      }
    ]
  }
}
```

```js
import coffee from 'file.coffee';
```

### CLI

```bash
webpack --module-bind 'coffee=coffee-loader'
```

```js
import coffee from 'file.coffee';
```

### Require

```js
import coffee from 'coffee-loader!./file.coffee';
```

<h2 align="center">Options</h2>

### [Literate](http://coffeescript.org/#literate)

**webpack.config.js**
```js
module.exports = {
  module: {
    rules: [
      {
        test: /\.coffee.md$/,
        use: [
          {
            loader: 'coffee-loader',
            options: { literate: true }
          }
        ]
      }
    ]
  }
}
```

### Sourcemaps

**webpack.config.js**
```js
module.exports = {
  module: {
    rules: [
      {
        test: /\.coffee$/,
        use: [
          {
            loader: 'coffee-loader',
            options: { sourceMap: true }
          }
        ]
      }
    ]
  }
}
```

<h2 align="center">Maintainer</h2>

<table>
  <tbody>
    <tr>
      <td align="center">
        <img width="150 height="150" src="https://github.com/sokra.png?s=150">
        <br>
        <a href="https://github.com/sokra">Tobias Koppers</a>
      </td>
    <tr>
  <tbody>
</table>


[npm]: https://img.shields.io/npm/v/coffee-loader.svg
[npm-url]: https://npmjs.com/package/coffee-loader

[node]: https://img.shields.io/node/v/coffee-loader.svg
[node-url]: https://nodejs.org

[deps]: https://david-dm.org/webpack/coffee-loader.svg
[deps-url]: https://david-dm.org/webpack/coffee-loader

[tests]: http://img.shields.io/travis/webpack/coffee-loader.svg
[tests-url]: https://travis-ci.org/webpack/coffee-loader

[cover]: https://coveralls.io/repos/github/webpack/coffee-loader/badge.svg
[cover-url]: https://coveralls.io/github/webpack/coffee-loader

[chat]: https://badges.gitter.im/webpack/webpack.svg
[chat-url]: https://gitter.im/webpack/webpack
