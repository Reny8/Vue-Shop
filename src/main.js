import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';
import Sample from './pages/Sample.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/sample' },
    {
      path: '/sample',
      component: Sample,
    },
  ],
});

const app = createApp(App);
app.use(router);
app.mount('#app');
