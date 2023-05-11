<template>
  <header>
    <div>
      <h1>{{ title }}</h1>
    </div>

    <div class="navigation-container">
      <button>products</button>
      <button>cart</button>
      <p>{{ cartItemsAmount }}</p>
    </div>

    <div class="access-container">
      <button>login</button>
    </div>
  </header>
</template>

<script>
export default {
  name: 'TheHeader',
  props: ['title'],
  computed: {
    cartItemsAmount() {
      return this.$store.state.cartItems;
    },
  },
};
</script>

<style scoped>
header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 3rem;
}
h1 {
  margin: 0rem;
  filter: drop-shadow(1px 1px 1px black);
}
div.access-container button {
  border: solid 1px rgb(95, 0, 95);
  background-color: transparent;
  border-radius: 40px;
  padding: 0.5rem 2rem;
}
div.access-container button:hover {
  background-color: rgb(95, 0, 95);
  color: white;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 7px -1px,
    rgba(0, 0, 0, 0.14) 0px 1px 1px 0px, rgba(0, 0, 0, 0.12) 0px 1px 3px 0px;
}
p {
  color: white;
  background-color: rgb(95, 0, 95);
  padding: 0.2rem 1.5rem;
  border-radius: 40px;
  margin: 0rem;
  display: flex;
  align-items: center;
}
div.navigation-container {
  display: flex;
  flex-direction: row;
  gap: 1.2rem;
}
button {
  text-transform: capitalize;
  background-color: transparent;
  border: none;
  font-weight: 700;
  font-size: 17px;
  color: rgb(95, 0, 95);
  padding: 0.3rem 0rem;
}

button:hover {
  cursor: pointer;
  border-bottom: solid 1px rgb(95, 0, 95);
}
</style>
