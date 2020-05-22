const path = require('path');

function testLoader(source, sourceMap) {
  if (sourceMap) {
    // eslint-disable-next-line no-param-reassign
    sourceMap.sources = sourceMap.sources.map((item) => {
      if (path.isAbsolute(item)) {
        return `/absolute/path/to/${path
          .relative(process.cwd(), item)
          .replace(/\\/g, '/')}`;
      }

      return item;
    });
  }

  return `module.exports = ${JSON.stringify({ source, sourceMap })}`;
}

module.exports = testLoader;
