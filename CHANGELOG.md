# Change Log

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

### [1.0.0](https://github.com/webpack-contrib/coffee-loader/compare/v0.9.0...v1.0.0) (2020-05-22)

### BREAKING CHANGES

* minimum required Node.js version is `10.13.0`
* minimum required `webpack` version is `4.0.0`
* minimum required `coffeescript` version is `2.0.0`
* default value for the `sourceMap` option based on the value of the `compiler.devtool` option

### Features

* respect the `compiler.devtool` value for the `sourceMap` option
* developer can override CoffeeScript options

### Bug Fixes

* fix error reporting

<a name="0.9.0"></a>
# [0.9.0](https://github.com/webpack-contrib/coffee-loader/compare/v0.8.0...v0.9.0) (2017-10-25)


### Features

* add `transpile` option (`options.transpile`) ([#47](https://github.com/webpack-contrib/coffee-loader/issues/47)) ([abaf498](https://github.com/webpack-contrib/coffee-loader/commit/abaf498))



<a name="0.8.0"></a>
# 0.8.0 (2017-08-23)


### Bug Fixes

* **#25:** fix coffee-script dependency version ([@jacobthemyth](https://github.com/jacobthemyth)) ([69ebdf4](https://github.com/webpack-contrib/coffee-loader/commit/69ebdf4))
* **getOptions:** deprecation warn in loaderUtils ([#28](https://github.com/webpack-contrib/coffee-loader/issues/28)) ([4e6b430](https://github.com/webpack-contrib/coffee-loader/commit/4e6b430))


### Features

* add support for coffeescript 2 dependency ([#30](https://github.com/webpack-contrib/coffee-loader/issues/30)) ([e5c24cc](https://github.com/webpack-contrib/coffee-loader/commit/e5c24cc))
