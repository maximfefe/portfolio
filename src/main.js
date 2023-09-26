import '@/assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Atropos from 'atropos/vue';


const app = createApp(App)
                .component('atropos-component', Atropos)

app.use(router)

app.mount('#app')