import { defineConfig } from "eslint/config";
import configsWebpack from "eslint-config-webpack/configs.js";

export default defineConfig([
  {
    extends: [configsWebpack["recommended-dirty"]],
  },
]);
