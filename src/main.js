import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import Vue3Lottie from 'vue3-lottie'

const app = createApp(App)
app.use(Vue3Lottie)
app.mount('#app')
