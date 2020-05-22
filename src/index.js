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
  const { coffeeScriptOptions } = options;

  let result;

  try {
    result = coffeescript.compile(source, {
      ...coffeeScriptOptions,
      ...{ sourceMap: useSourceMap, filename: this.resourcePath },
    });
  } catch (e) {
    let error = '';

    if (
      e.location == null ||
      e.location.first_column == null ||
      e.location.first_line == null
    ) {
      error += `Got an unexpected exception from the CoffeeScript compiler. The original exception was: ${e}\n(The CoffeeScript compiler should not raise *unexpected* exceptions. You can file this error as an issue of the CoffeeScript compiler: https://github.com/webpack-contrib/coffee-loader/issues)\n`;
    } else {
      const codeLine = source.split('\n')[e.location.first_line];
      const offendingCharacter =
        e.location.first_column < codeLine.length
          ? codeLine[e.location.first_column]
          : '';

      error += `${e}\n`;
      // log erroneous line and highlight offending character
      error += `    L${e.location.first_line}: ${codeLine.substring(
        0,
        e.location.first_column
      )}${offendingCharacter}${codeLine.substring(
        e.location.first_column + 1
      )}\n`;
      error += `         ${new Array(e.location.first_column + 1).join(
        ' '
      )}^\n`;
    }

    callback(new Error(error));

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
