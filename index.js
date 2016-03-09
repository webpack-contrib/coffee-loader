/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
var coffee = require("coffee-script");
var loaderUtils = require("loader-utils");
var crypto = require('crypto');
var fs = require('fs');
var mkdirp = require('mkdirp');
var path = require('path');

var hasCreatedCacheDirectory = false

module.exports = function(source) {
	this.cacheable && this.cacheable();
	var loaderOptions = loaderUtils.parseQuery(this.query);
	var coffeeRequest = loaderUtils.getRemainingRequest(this);
	var jsRequest = loaderUtils.getCurrentRequest(this);
	var query = loaderUtils.parseQuery(this.query);
	var result;

	try {
		var cacheDirectory = loaderOptions.cacheDirectory ? path.normalize(loaderOptions.cacheDirectory + path.sep) : false;

		if (cacheDirectory && !hasCreatedCacheDirectory) {
			mkdirp.sync(cacheDirectory);
		}

		if (cacheDirectory) {
			var sourceMD5 = crypto.createHash("md5").update(source).digest("hex");
			var cacheFile = path.normalize(cacheDirectory + path.sep + "coffe_loader_" + sourceMD5 + ".json");

			try {
				var cacheFileContent = fs.readFileSync(cacheFile);
				if (cacheFileContent) {
					result = JSON.parse(cacheFileContent);
				}
			} catch (e) {
				result = coffee.compile(source, {
					literate: query.literate,
					filename: coffeeRequest,
					debug: this.debug,
					bare: true,
					sourceMap: true,
					sourceRoot: "",
					sourceFiles: [coffeeRequest],
					generatedFile: jsRequest
				});
				fs.writeFileSync(cacheFile, JSON.stringify(result));
			}
		} else {
			result = coffee.compile(source, {
				literate: query.literate,
				filename: coffeeRequest,
				debug: this.debug,
				bare: true,
				sourceMap: true,
				sourceRoot: "",
				sourceFiles: [coffeeRequest],
				generatedFile: jsRequest
			});
		}
	} catch (e) {
		var err = "";
		if (e.location == null || e.location.first_column == null || e.location.first_line == null) {
			err += "Got an unexpected exception from the coffee-script compiler. The original exception was: " + e + "\n";
			err += "(The coffee-script compiler should not raise *unexpected* exceptions. You can file this error as an issue of the coffee-script compiler: https://github.com/jashkenas/coffee-script/issues)\n";
		} else {
			var codeLine = source.split("\n")[e.location.first_line];
			var offendingCharacter = (e.location.first_column < codeLine.length) ? codeLine[e.location.first_column] : "";
			err += e + "\n";
			// log erroneous line and highlight offending character
			err += "    L" + e.location.first_line + ": " + codeLine.substring(0, e.location.first_column) + offendingCharacter + codeLine.substring(e.location.first_column + 1) + "\n";
			err += "         " + (new Array(e.location.first_column + 1).join(" ")) + "^\n";
		}
		throw new Error(err);
	}
	var map = JSON.parse(result.v3SourceMap);
	map.sourcesContent = [source];
	this.callback(null, result.js, map);
}
