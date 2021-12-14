import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import api from './api';
import './index.css';
import NavBar from './components/NavBar.vue';
import SuggestionBlock from './components/SuggestionBlock.vue';
import Footer from './components/Footer.vue';

const app = createApp(App);

app.use(store);
app.use(router);
app.config.globalProperties.$api = api;
app.component('nav-bar', NavBar);
app.component('suggestion-block', SuggestionBlock);
app.component('footer-component', Footer);
app.mount('#app');
