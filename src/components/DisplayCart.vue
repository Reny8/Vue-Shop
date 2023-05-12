<template>
  <div>
    <table v-if="products.length">
      <thead>
        <tr>
          <th>Product</th>
          <th>Title</th>
          <th>Description</th>
          <th>Price</th>
          <th>Quantity</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(product, index) in products" :key="index * 3">
          <td><img :src="product.item.image" /></td>
          <td>{{ product.item.productName }}</td>
          <td>
            <p>{{ product.item.description }}</p>
          </td>
          <td>$ {{ product.item.price }}</td>
          <td><input type="number" :value="product.item.quantity" /></td>
        </tr>
      </tbody>
    </table>
    <!-- <section v-else>
      <h1>NO ITEMS CURRENTLY IN YOUR CART</h1>
    </section> -->
  </div>
</template>

<script>
export default {
  name: 'DisplayCart',
  data() {
    return {
      products: this.$store.state.cartProducts,
    };
  },
};
</script>

<style scoped>
div {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  margin: 2rem;
  padding: 1rem;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 7px -1px,
    rgba(0, 0, 0, 0.14) 0px 1px 1px 0px, rgba(0, 0, 0, 0.12) 0px 1px 3px 0px;
  background-color: white;
}
table {
  width: 100%;
  border-radius: 5px;
  border-collapse: collapse;
  text-align: left;
}
table,
th,
td {
  border: solid 1px;
  padding: 0.5rem;
}
img {
  height: 4rem;
  width: 6rem;
}
th:first-child {
  width: 6rem;
}
td:nth-child(4),
td:last-child,
th:nth-child(4) {
  text-align: center;
}
th:nth-child(4) {
  width: 8rem;
}
th:last-child {
  width: 5rem;
  text-align: center;
}
input {
  width: 2rem;
}
input[type='number']::-webkit-inner-spin-button,
input[type='number']::-webkit-outer-spin-button {
  opacity: 1;
}
</style>
