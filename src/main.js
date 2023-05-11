import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import { createStore } from 'vuex';
import App from './App.vue';
import Sample from './pages/Sample.vue';
import Home from './pages/Home.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Home },
    {
      path: '/sample',
      component: Sample,
    },
  ],
});

const store = createStore({
  state() {
    return {
      cartItems: 0,
    };
  },
  mutations: {
    incrementCartItems(state, payload) {
      state.cartItems += payload.value;
    },
  },
});
const app = createApp(App);
app.use(router);
app.use(store)
app.mount('#app');
