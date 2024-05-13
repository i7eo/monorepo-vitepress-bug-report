import { defineConfig, type Alias, searchForWorkspaceRoot } from "vite";
import process from "node:process";
import { resolve } from "node:path";
import PluginVue from "@vitejs/plugin-vue";
import PluginVueJsx from "@vitejs/plugin-vue-jsx";

const cwd = process.cwd();
const root = searchForWorkspaceRoot(cwd);

const alias: Alias[] = [
  {
    find: "~/",
    replacement: `${resolve(__dirname, "./.vitepress/vitepress")}/`,
  },
];
if (process.env.DEV) {
  alias.push(
    {
      find: new RegExp(`(?<=@mvbri7eo\\/node-)(.*)`),
      replacement: `${resolve(root, "packages.node")}/$1`,
    },
    {
      find: new RegExp(`(?<=@mvbri7eo\\/)(.*)`),
      replacement: `${resolve(root, "packages.web")}/$1`,
    },
  );
}

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    conditions: ["dev"],
    // alias
  },
  plugins: [PluginVue(), PluginVueJsx()],
});
