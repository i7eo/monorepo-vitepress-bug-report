import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  vite: {
    resolve: {
      conditions: ["dev"],
      alias: {
        "@mvbri7eo/node-gitlab": "../../../packages.node/gitlab",
        "@mvbri7eo/node-utils": "../../../packages.node/utils",
        "@mvbri7eo/meta": "../../../packages.web/meta",
        "@mvbri7eo/metas": "../../../packages.web/metas",
        "@mvbri7eo/utils": "../../../packages.web/utils",
      },
    },
  },
  title: "Document",
  description: "monorepo test",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Examples", link: "/markdown-examples" },
    ],

    sidebar: [
      {
        text: "Examples",
        items: [
          { text: "Markdown Examples", link: "/markdown-examples" },
          { text: "Runtime API Examples", link: "/api-examples" },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
  },
});
