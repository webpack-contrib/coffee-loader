import { defineConfig, globalIgnores } from "eslint/config";
import configWebpack from "eslint-config-webpack";

export default defineConfig([
  globalIgnores(["node_modules", "dist", "coverage", "test/fixtures"]),
  {
    extends: [configWebpack],
    languageOptions: {
      sourceType: "module",
    },
  },
]);
