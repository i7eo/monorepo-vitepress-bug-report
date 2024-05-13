import { type EnhanceAppContext, type Theme, inBrowser } from "vitepress";
import DefaultTheme from "vitepress/theme";
import { onMounted } from "vue";
import { DEPLOY_IP } from "@mvbri7eo/metas";
import { DEPLOY_DOCUMENT_HOST, DEPLOY_DOCUMENT_URL } from "@mvbri7eo/meta";

const theme: Theme = {
  ...DefaultTheme,
  enhanceApp({ router }: EnhanceAppContext) {
    if (inBrowser) {
      window.addEventListener("hashchange", () => {
        const { href: url } = window.location;
        // eslint-disable-next-line no-console
        console.log("vitepress has change:", url);
      });

      router.onAfterRouteChanged = (to) => {
        // eslint-disable-next-line no-console
        console.log("vitepress after route change:", to);
      };
    }
  },
  setup() {
    onMounted(() => {
      console.log("@mvbri7eo/metas: ", DEPLOY_IP);
      console.log(
        "@mvbri7eo/meta: ",
        DEPLOY_DOCUMENT_HOST,
        DEPLOY_DOCUMENT_URL,
      );
    });
  },
};

export default theme;
