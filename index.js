/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
var coffee = require("coffee-script");
module.exports = function(source) {
	this.cacheable && this.cacheable();
	return coffee.compile(source, {
		filename: this.resource,
		debug: this.debug
	});
}
module.exports.seperable = true;