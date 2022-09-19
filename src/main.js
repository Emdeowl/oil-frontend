import { createApp} from "vue";
import App from "./App.vue";
import axios from 'axios'
import vueAxios from 'vue-axios'
import store from './store/store.js'
import VueProgress from 'vue-progress-path'
import 'vue-progress-path/dist/vue-progress-path.css'
import router from './router'


const app = createApp(App)

app.config.globalProperties.$axios=axios
app.use(router, store, axios, vueAxios, VueProgress).mount('#app');
