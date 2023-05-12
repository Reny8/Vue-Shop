import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import { createStore } from 'vuex';
import App from './App.vue';
import Sample from './pages/Sample.vue';
import Home from './pages/Home.vue';
import Cart from './pages/Cart.vue';
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/products' },
    { path: '/products', component: Home },
    { path: '/cart', component: Cart },
    {
      path: '/sample',
      component: Sample,
    },
  ],
});

const store = createStore({
  state() {
    return {
      cartItemsAmount: 0,
      totalPrice: 0,
      cartProducts: [],
      products: [
        {
          id: 1,
          productName: 'Book Collection',
          image:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Books_HD_%288314929977%29.jpg/640px-Books_HD_%288314929977%29.jpg',
          price: 99.99,
          description:
            'A collection of must-read books. All-time classics included!',
          quantity: 0,
        },
        {
          id: 2,
          productName: 'Mountain Tent',
          image:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Tent_at_High_Shelf_Camp_cropped.jpg/640px-Tent_at_High_Shelf_Camp_cropped.jpg',
          price: 129.99,
          description: 'A tent for the ambitious outdoor tourist.',
          quantity: 0,
        },
        {
          id: 3,
          productName: 'Food Box',
          image:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg/640px-Good_Food_Display_-_NCI_Visuals_Online.jpg',
          price: 6.99,
          description:
            'May be partially expired when it arrives but at least it is cheap!',
          quantity: 0,
        },
      ],
    };
  },
  mutations: {
    incrementCartItems(state, payload) {
      if (payload.quantity) {
        state.cartItemsAmount += payload.quantity;
      } else {
        state.cartItemsAmount += 1;
      }
    },
    incrementTotal(state, payload) {
      state.totalPrice += payload.item.price;
      state.totalPrice = parseFloat(state.totalPrice.toFixed(2))
    },
    addItemToCart(state, payload) {
      if (state.cartProducts.length === 0) {
        state.cartProducts.push(payload);
      }
      const findItem = state.cartProducts.find(
        (product) => product.item.id === payload.item.id
      );
      if (findItem) {
        payload.item.quantity++;
      } else {
        payload.item.quantity++;
        state.cartProducts.push(payload);
      }
      store.commit('incrementTotal', payload);
    },
  },
});
const app = createApp(App);
app.use(router);
app.use(store);
app.mount('#app');
