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
    <img width="200" height="200" hspace="30"
      src="https://webpack.js.org/assets/icon-square-big.svg">
  </a>
  <h1>Coffee Loader</h1>
  <p>Loads <a href="http://coffeescript.org/">CoffeeScript</a> like JavaScript</p>
</div>

<h2 align="center">Install</h2>

```bash
npm install --save-dev coffee-loader coffeescript
```

### CoffeeScript 2 (Beta)

```bash
npm install --save-dev coffee-loader coffeescript@next
```

<h2 align="center">Usage</h2>

```js
import file from 'file.coffee';
```

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

<h2 align="center">Options</h2>

|Name|Type|Default|Description|
|:--:|:--:|:-----:|:----------|
|**`literate`**|`{Boolean}`|`false`|Enable CoffeeScript in Markdown (Code Blocks) e.g `file.coffee.md`|
|**`sourceMap`**|`{Boolean}`|`false`|Enable/Disable Sourcemaps|

### [Literate](http://coffeescript.org/#literate)

**webpack.config.js**
```js
{
  test: /\.coffee.md$/,
  use: [
    {
      loader: 'coffee-loader',
      options: { literate: true }
    }
  ]
}
```

### SourceMaps

**webpack.config.js**
```js
{
  test: /\.coffee$/,
  use: [
    {
      loader: 'coffee-loader',
      options: { sourceMap: true }
    }
  ]
}
```

<h2 align="center">Maintainer</h2>

<table>
  <tbody>
    <tr>
      <td align="center">
        <img width="150" height="150"
        src="https://github.com/bebraw.png?v=3&s=150">
        </br>
        <a href="https://github.com/bebraw">Juho Vepsäläinen</a>
      </td>
      <td align="center">
        <img width="150" height="150"
        src="https://github.com/d3viant0ne.png?v=3&s=150">
        </br>
        <a href="https://github.com/d3viant0ne">Joshua Wiens</a>
      </td>
      <td align="center">
        <img width="150" height="150"
        src="https://github.com/SpaceK33z.png?v=3&s=150">
        </br>
        <a href="https://github.com/SpaceK33z">Kees Kluskens</a>
      </td>
      <td align="center">
        <img width="150" height="150"
        src="https://github.com/TheLarkInn.png?v=3&s=150">
        </br>
        <a href="https://github.com/TheLarkInn">Sean Larkin</a>
      </td>
      <td align="center">
        <img width="150" height="150"
        src="https://github.com/michael-ciniawsky.png?v=3&s=150">
        </br>
        <a href="https://github.com/michael-ciniawsky">Michael Ciniawsky</a>
      </td>
    </tr>
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
