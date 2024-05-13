<script setup lang="ts">
import HelloWorld from "./components/HelloWorld.vue";
import { DEPLOY_IP } from "@mvbri7eo/metas";
import { DEPLOY_DOCUMENT_HOST, DEPLOY_DOCUMENT_URL } from "@mvbri7eo/meta";

console.log("@mvbri7eo/metas: ", DEPLOY_IP);
console.log("@mvbri7eo/meta: ", DEPLOY_DOCUMENT_HOST, DEPLOY_DOCUMENT_URL);
</script>

<template>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <HelloWorld msg="Vite + Vue" />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
