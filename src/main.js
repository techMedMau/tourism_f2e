
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import api from './api'

import './index.css'
import NavBar from '@/components/NavBar'


const app = createApp(App);

app.use(store);
app.use(router);
app.config.globalProperties.$api = api
app.component('Nav-bar', NavBar)
app.mount('#app')
