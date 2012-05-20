/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
module.exports = function() {
	this.cacheable && this.cacheable();
	var coffee = require("coffee-script");
	var results = [null];
	var options = this;
	Array.prototype.forEach.call(arguments, function(content, idx) {
		results[idx+1] = coffee.compile(content, {
			filename: options.filenames[idx],
			debug: options.debug
		});
	});
	this.callback.apply(null, results);
}