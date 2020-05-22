/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
import validateOptions from 'schema-utils';

import coffeescript from 'coffeescript';
import loaderUtils from 'loader-utils';

import schema from './options.json';
import CoffeeScriptError from './CoffeeScriptError';

export default function loader(source) {
  const options = loaderUtils.getOptions(this);

  validateOptions(schema, options, {
    name: 'CoffeeScript Loader',
    baseDataPath: 'options',
  });

  const callback = this.async();
  const useSourceMap =
    typeof options.sourceMap === 'boolean' ? options.sourceMap : this.sourceMap;

  let result;

  try {
    result = coffeescript.compile(source, {
      ...{ sourceMap: useSourceMap, bare: true },
      ...options,
      ...{ filename: this.resourcePath },
    });
  } catch (error) {
    callback(new CoffeeScriptError(error));

    return;
  }

  let map;

  if (useSourceMap && result.v3SourceMap) {
    map = JSON.parse(result.v3SourceMap);

    delete map.file;

    result = result.js;
  }

  callback(null, result, map);
}
