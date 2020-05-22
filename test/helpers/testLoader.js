const path = require('path');

function testLoader(source, sourceMap) {
  if (sourceMap) {
    // eslint-disable-next-line no-param-reassign
    sourceMap.sources = sourceMap.sources.map((item) =>
      path.relative(process.cwd(), item)
    );
  }

  return `module.exports = ${JSON.stringify({ source, sourceMap })}`;
}

module.exports = testLoader;
