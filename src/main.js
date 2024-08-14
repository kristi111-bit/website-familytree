import { createApp } from 'vue'
import App from './App.vue'
import '@mdi/font/css/materialdesignicons.css';
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    { path: '/', component: App }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

createApp(App)
    .use(router)
    .mount('#app');
