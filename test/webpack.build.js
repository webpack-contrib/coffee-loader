const fs = require('fs-extra');
/* eslint-disable import/order */
const path = require('path');
const webpack = require('webpack');

const builds = path.join(__dirname, 'builds');

if (fs.existsSync(builds)) fs.remove(builds);

fs.readdirSync(path.join(__dirname, 'configs'))
  .filter(file => path.extname(file) === '.json')
  .forEach((config) => {
    /* eslint-disable
      no-param-reassign,
      import/no-dynamic-require,
      global-require
    */
    config = require(path.join(__dirname, 'configs', config));
    /* eslint-disable
      no-param-reassign,
      import/no-dynamic-require,
      global-require
    */
    config = require(path.join(__dirname, 'webpack.config.js'))(config);

    webpack(config, () => {});
  });
