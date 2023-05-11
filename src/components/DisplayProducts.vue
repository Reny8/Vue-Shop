<template>
  <section>
    <div v-for="item in items" :key="item.id" class="item-container">
      <div class="top-container">
        <img :src="item.image" alt="item" />
        <div class="right-items">
          <h1>{{ item.productName }}</h1>
          <p id="price">$ {{ item.price }}</p>
          <p id="description">{{ item.description }}</p>
        </div>
      </div>
      <div class="bottom-container">
        <button>add to cart</button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'DisplayProducts',
  data() {
    return {
      items: this.$store.state.products,
    };
  },
};
</script>

<style scoped>
div.top-container {
  display: flex;
}
div.top-container img {
  width: 20rem;
  height: 14rem;
}
div.item-container {
  border: none;
  margin: 1rem 3rem;
  padding: 1.5rem 1rem 1rem 1rem;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 7px -1px,
    rgba(0, 0, 0, 0.14) 0px 1px 1px 0px, rgba(0, 0, 0, 0.12) 0px 1px 3px 0px;
  background-color: white;
}
div.item-container div.right-items {
  text-align: left;
  margin-left: 2rem;
}
div.item-container div.right-items h1 {
  margin-top: 0rem;
  margin-bottom: 0.5rem;
}
div.right-items p#price {
  background-color: rgb(231, 150, 0);
  font-weight: bold;
  border-radius: 15px;
  width: fit-content;
  padding: 0.3rem 2rem;
}
div.bottom-container button {
  width: 100%;
  border: none;
  margin-top: 1rem;
  padding: 1rem 0rem;
  text-transform: uppercase;
  background-color: rgb(95, 0, 95);
  color: white;
  border-radius: 5px;
  font-weight: bold;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 7px -1px,
    rgba(0, 0, 0, 0.14) 0px 1px 1px 0px, rgba(0, 0, 0, 0.12) 0px 1px 3px 0px;
}
div.bottom-container button:hover {
  background-color: rgba(95, 0, 95, 0.719);
}
div.bottom-container button:active {
  background-color: rgb(95, 0, 95);
  box-shadow: inset 0 2px 4px 0 rgb(0 0 0 / 0.05);
  transform: scale(98%);
  transition-duration: 500ms;
}
</style>
