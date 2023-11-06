
import { createApp } from 'vue'
import { createPinia } from 'pinia'


import App from './App.vue'
import router from './router'

import Vant from 'vant'
import 'vant/lib/index.css'

import piniaPluginPersist from 'pinia-plugin-persist'

const app = createApp(App)
const pinia = createPinia()
pinia.use(piniaPluginPersist)
app.use(pinia)
app.use(Vant)
app.use(router)

app.mount('#app')
