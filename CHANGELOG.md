# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## [5.0.0](https://github.com/webpack-contrib/coffee-loader/compare/v4.0.0...v5.0.0) (2024-01-15)


### ⚠ BREAKING CHANGES

* minimum supported Node.js version is `18.12.0` ([#174](https://github.com/webpack-contrib/coffee-loader/issues/174)) ([1d4adfd](https://github.com/webpack-contrib/coffee-loader/commit/1d4adfd0bd5c9d9f4e05c16e4d0c2caacca7644d))

## [4.0.0](https://github.com/webpack-contrib/coffee-loader/compare/v3.0.0...v4.0.0) (2022-05-18)


### ⚠ BREAKING CHANGES

* minimum supported `Node.js` version is `14.15.0` 

## [3.0.0](https://github.com/webpack-contrib/coffee-loader/compare/v2.0.0...v3.0.0) (2021-05-11)


### ⚠ BREAKING CHANGES

* minimum supported `Node.js` version is `12.13.0`

## [2.0.0](https://github.com/webpack-contrib/coffee-loader/compare/v1.0.1...v2.0.0) (2020-12-22)


### ⚠ BREAKING CHANGES

* minimum supported webpack version is `5`

### [1.0.1](https://github.com/webpack-contrib/coffee-loader/compare/v1.0.0...v1.0.1) (2020-10-09)

### Chore

* update `schema-utils`

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
