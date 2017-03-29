import loaderUtils from 'loader-utils';
import coffeescript from 'coffeescript';

export default function (source) {
  const file = this.resourcePath;
  const options = loaderUtils.getOptions(this) || {};

  let result;

  try {
    result = coffeescript.compile(source, {
      literate: options.literate,
      filename: file,
      debug: this.debug,
      bare: true,
      sourceMap: true,
      sourceRoot: '',
      sourceFiles: [loaderUtils.getRemainingRequest(this)],
      generatedFile: loaderUtils.getCurrentRequest(this),
    });
  } catch (err) {
    const { location } = err;

    let error;

    if (!location || !location.first_line || !location.first_column) {
      error = `Got an unexpected exception from the coffeescript compiler. The original exception was: ${err};
      (The coffeescript compiler should not raise *unexpected* exceptions. You can file this error as an issue of the coffeescript compiler: https://github.com/jashkenas/coffee-script/issues)
    `;
    } else {
      const line = source.split('\n')[location.first_line];
      const offending = (location.first_column < line.length) ? line[location.first_column] : '';

      // log erroneous line and highlight offending character
      error = `${err};
      ${location.first_line}:${line.substring(0, location.first_column)} ${offending}${line.substring(location.first_column + 1)};
      ${new Array(location.first_column + 1).join(' ')};
      `;
    }

    throw new Error(error);
  }

  const map = JSON.parse(result.v3SourceMap);

  map.sourcesContent = [source];

  return this.callback(null, result.js, map);
}
