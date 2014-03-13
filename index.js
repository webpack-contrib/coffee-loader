/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
var coffee = require("coffee-script");
var loaderUtils = require("loader-utils");
module.exports = function(source) {
	this.cacheable && this.cacheable();
	var coffeeRequest = loaderUtils.getRemainingRequest(this);
	var jsRequest = loaderUtils.getCurrentRequest(this);
	var result = coffee.compile(source, {
		literate: /\.(litcoffee|coffee\.md)$/.test(coffeeRequest),
		filename: coffeeRequest,
		debug: this.debug,
		bare: true,
		sourceMap: true,
		sourceRoot: "",
		sourceFiles: [coffeeRequest],
		generatedFile: jsRequest
	});
	var map = JSON.parse(result.v3SourceMap);
	map.sourcesContent = [source];
	this.callback(null, result.js, map);
}
module.exports.seperable = true;