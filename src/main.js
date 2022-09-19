import { createApp, h } from "vue";
import axios from 'axios'
import vueAxios from 'vue-axios'
import store from './store'
import App from "./App.vue";
import VueProgress from 'vue-progress-path'
import 'vue-progress-path/dist/vue-progress-path.css'
import router from './router'


const app = createApp({
  render: () => h(App),
});

app.use(router, store, axios, vueAxios, VueProgress).mount('#app');
