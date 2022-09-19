import { createApp} from "vue";
import axios from 'axios'
import vueAxios from 'vue-axios'
import store from './store'
import VueProgress from 'vue-progress-path'
import 'vue-progress-path/dist/vue-progress-path.css'
import router from './router'
import App from "./App.vue";


const app = createApp(App)


app.use(router, store, axios, vueAxios, VueProgress).mount('#app');
