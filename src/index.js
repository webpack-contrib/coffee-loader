/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
import validateOptions from 'schema-utils';

import coffeescript from 'coffeescript';
import loaderUtils from 'loader-utils';

import schema from './options.json';

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
      ...{ sourceMap: useSourceMap },
      ...options,
      ...{ filename: this.resourcePath },
    });
  } catch (originalError) {
    let error = '';

    if (
      originalError.location == null ||
      originalError.location.first_column == null ||
      originalError.location.first_line == null
    ) {
      error += new Error(
        `Got an unexpected exception from the CoffeeScript compiler. The original exception was: ${originalError}\n(The CoffeeScript compiler should not raise *unexpected* exceptions. You can file this error as an issue of the CoffeeScript compiler: https://github.com/webpack-contrib/coffee-loader/issues)\n`
      );
    } else {
      error = originalError;
    }

    callback(error);

    return;
  }

  let map;

  if (useSourceMap && result.v3SourceMap) {
    // TODO improve from babel-loader
    map = JSON.parse(result.v3SourceMap);
    result = result.js;
  }

  callback(null, result, map);
}
