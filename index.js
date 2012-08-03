/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
var coffee = require("coffee-script");
module.exports = function(source) {
	this.cacheable && this.cacheable();
	return coffee.compile(source, {
		filename: this.filenames[0],
		debug: this.debug
	});
}