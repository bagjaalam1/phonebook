import { createApp, provide, h } from "vue";
import App from "./App.vue";
import { DefaultApolloClient } from '@vue/apollo-composable'
import apolloClient from "./apollo";
import store from './store'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";

const app = createApp({
  setup() {
    provide(DefaultApolloClient, apolloClient);
  },

  render: () => h(App),
});

app.use(store);
app.mount("#app");
