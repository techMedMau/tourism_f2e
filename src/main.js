
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './index.css'
import NavBar from '@/components/NavBar'

createApp(App).use(store).use(router).component('Nav-bar', NavBar).mount('#app')
