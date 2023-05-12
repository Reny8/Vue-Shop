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
        <tr v-for="product in products" :key="product.item.id">
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
    <table v-if="products.length">
      <tbody>
        <tr>
          <td>
            <h3>Final Total Due: $ {{ total }}</h3>
          </td>
        </tr>
      </tbody>
    </table>
    <section v-else>
      <h1>NO ITEMS CURRENTLY IN YOUR CART</h1>
    </section>
  </div>
</template>

<script>
export default {
  name: 'DisplayCart',
  data() {
    return {
      products: this.$store.state.cartProducts,
      total: this.$store.state.totalPrice,
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
  gap: 2rem;
  padding: 1rem;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 7px -1px,
    rgba(0, 0, 0, 0.14) 0px 1px 1px 0px, rgba(0, 0, 0, 0.12) 0px 1px 3px 0px;
  background-color: white;
}
table {
  width: 100%;
  border-collapse: collapse;
  text-align: left;
}
table:last-child > td {
  text-align: center;
  border: none;
}
table:last-child {
  background-color: rgb(95, 0, 95);
  color: white;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 7px -1px,
    rgba(0, 0, 0, 0.14) 0px 1px 1px 0px, rgba(0, 0, 0, 0.12) 0px 1px 3px 0px;
}
table:last-child,
table:last-child td,
table:last-child th {
  border: none;
}
h3 {
  margin: 0.5rem;
}
table:first-child,
table:first-child th,
table:first-child td {
  border: solid 1px #b4b4b4;
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
