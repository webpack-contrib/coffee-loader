const path = require("node:path");

function testLoader(source, sourceMap) {
  if (sourceMap) {
    sourceMap.sources = sourceMap.sources.map((item) => {
      if (path.isAbsolute(item)) {
        return `/absolute/path/to/${path
          .relative(process.cwd(), item)
          .replaceAll("\\", "/")}`;
      }

      return item;
    });
  }

  return `module.exports = ${JSON.stringify({ source, sourceMap })}`;
}

module.exports = testLoader;
