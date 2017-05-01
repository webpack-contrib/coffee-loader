const path = require('path');

module.exports = (config) => {
  return {
    target: 'node',
    context: path.join(__dirname, 'configs'),
    entry: `./${config.file}.js`,
    output: {
      path: path.join(__dirname, 'builds'),
      filename: `${config.file}.test.js`,
    },
    module: {
      rules: [
        {
          test: /\.coffee(\.md)?$/,
          use: [
            {
              loader: path.resolve('dist', 'cjs.js'),
              options: config.options || {},
            },
          ],
        },
      ],
    },
  };
};
