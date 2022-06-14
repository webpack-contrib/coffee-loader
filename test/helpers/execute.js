const Module = require("module");
const path = require("path");

const parentModule = module;

module.exports = (code) => {
  const resource = "test.js";
  const module = new Module(resource, parentModule);
  // eslint-disable-next-line no-underscore-dangle
  module.paths = Module._nodeModulePaths(
    path.resolve(__dirname, "../fixtures")
  );
  module.filename = resource;

  // eslint-disable-next-line no-underscore-dangle
  module._compile(`module.exports = ${code};`, resource);

  // eslint-disable-next-line no-underscore-dangle
  return module.exports.__esModule ? module.exports.default : module.exports;
};
