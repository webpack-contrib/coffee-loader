import { defineConfig } from "eslint/config";
import configWebpack from "eslint-config-webpack";

export default defineConfig([
  {
    extends: [configWebpack],
    languageOptions: {
      sourceType: "module",
    },
  },
]);
