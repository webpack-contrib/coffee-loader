import { getOptions } from 'loader-utils';
// import { validateOptions } from 'schema-utils';
/* eslint-disable import/order */
import coffeescript from 'coffeescript';

/**
 * Coffee Loader
 *
 * > Loads and compiles CoffeeScript (`.coffee`) files
 *
 * @author Tobias Koppers (@sokra)
 *         Michael Ciniawsky (@michael-cinaiwsky) <michael.ciniawsky@gmail.com>
 * @version 1.0.0
 * @license MIT
 *
 * @module coffee-loader
 *
 * @requires path
 *
 * @requires loaderUtils
 * @requires schemaUtils
 *
 * @requires coffeescript
 *
 * @method loader
 *
 * @param  {String} source Coffeescript Source
 * @param  {String} map    Coffeescript Sourcemap
 *
 * @return {Function} cb   Callback
 */
export default function (source, map) {
  const cb = this.async();

  const file = this.resourcePath;
  const options = getOptions(this) || {};

  // validateOptions('./schema', options, 'Coffee Loader')

  try {
    /* eslint-disable no-param-reassign */
    source = coffeescript.compile(source, {
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

      return cb(new Error(`${err.filename}\n\n${err.message}`));
    }

    return cb(new Error(err));
  }

  if (options.sourceMap) {
    /* eslint-disable no-param-reassign */
    map = JSON.parse(source.v3SourceMap);
    map.sourcesContent = [source];

    return cb(null, source.js, map);
  }

  return cb(null, source);
}
