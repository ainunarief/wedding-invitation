import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import Vue3Lottie from 'vue3-lottie'
import 'vue-fullpage.js/dist/style.css'
import VueFullPage from 'vue-fullpage.js'

const app = createApp(App)
app.use(Vue3Lottie)
app.use(VueFullPage)
app.mount('#app')
