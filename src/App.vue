<template>
  <TheHeader title="Vue Project" />
  <router-view></router-view>
</template>

<script>
import TheHeader from './components/TheHeader.vue';
export default {
  name: 'App',
  components: {
    TheHeader,
  },
};
</script>

<style>
html {
  background-color: #efefee;
}
body {
  height: 100%;
  margin: 0rem;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
