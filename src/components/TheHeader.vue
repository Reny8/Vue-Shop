<template>
  <header>
    <h1>{{ title }}</h1>
  </header>
</template>

<script>
export default {
  name: 'TheHeader',
  props: ['title'],
};
</script>

<style scoped>
header {
  color: white;
  background-color: #930000;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 1rem 2rem;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 7px -1px,
    rgba(0, 0, 0, 0.14) 0px 1px 1px 0px, rgba(0, 0, 0, 0.12) 0px 1px 3px 0px;
}
h1 {
  margin: 0rem;
  filter: drop-shadow(1px 1px 1px black);
}
button {
  border: solid 1px white;
  background-color: #690000;
  color: white;
  border-radius: 5px;
  padding: 0.5rem 1rem;
}
button:hover {
  transform: scale(105%);
  cursor: pointer;
  transition-duration: 500ms;
}
</style>
