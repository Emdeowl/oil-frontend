import { createApp, h } from "vue";
import { createRouter, createWebHashHistory } from "vue-router";
import { createApolloProvider } from "@vue/apollo-option";
import apolloClient from "./vue-apollo";

const apolloProvider = createApolloProvider({
  defaultClient: apolloClient,
});

const routes = [{ path: "/" }];

import App from "./App.vue";
const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHashHistory(),
    routes, // short for `routes: routes`
  });

const app = createApp({
  render: () => h(App),
});

app.use(router);
app.use(apolloProvider);
app.mount("#app");