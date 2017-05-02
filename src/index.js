import { getOptions } from 'loader-utils';
import validateOptions from 'schema-utils'; // eslint-disable-line

import coffeescript from 'coffeescript'; //eslint-disable-line

/**
 * Coffee Loader
 *
 * > Loads and compiles CoffeeScript (`.coffee`) files
 *
 * @author Tobias Koppers (@sokra)
 *
 * @version 1.0.0
 * @license MIT
 *
 * @module coffee-loader
 *
 * @requires path
 *
 * @requires loader-utils
 * @requires schema-utils
 *
 * @requires coffeescript
 *
 * @method loader
 *
 * @param  {String} src    Source
 * @param  {String} map    SourceMap
 *
 * @return {Function} cb   Result
 */
export default function (src, map) {
  const cb = this.async();

  const file = this.resourcePath;
  const options = getOptions(this) || {};

  // validateOptions('./options.json', options, 'Coffee Loader')

  let result;

  try {
    /* eslint-disable no-param-reassign */
    result = coffeescript.compile(src, {
      debug: this.debug,
      literate: options.literate,
      filename: file,
      bare: true,
      sourceMap: options.sourceMap,
      sourceRoot: '',
      sourceFiles: [file],
      generatedFile: file,
    });
  } catch (err) {
    if (err.location) {
      err.message = err.toString()
        .split(`${err.filename}`)
        .pop()
        .replace(':', '(')
        .replace(': error:', ')');

      /**
       * @typedef {Function} cb
       *
       * @memberof loader
       * @callback cb
       *
       * @param {Object} err Error
       */
      return cb(new Error(`${err.filename}\n\n${err.message}`));
    }
    /**
     * @memberof loader
     * @callback cb
     *
     * @param {Object} err Error
     */
    return cb(err);
  }

  if (options.sourceMap) {
    /* eslint-disable no-param-reassign */
    map = JSON.parse(result.v3SourceMap);
    map.sourcesContent = [result.js];

    /**
     * @memberof loader
     * @callback cb
     *
     * @param {Object} null Error
     * @param {String} result Result
     * @param {Object} map Sourcemap
     */
    return cb(null, result.js, map);
  }
  /**
   * @memberof loader
   * @callback cb
   *
   * @param {Object} null Error
   * @param {String} result Result
   */
  return cb(null, result);
}
