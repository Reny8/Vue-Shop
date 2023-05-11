<template>
  <div>
    <h1>{{ title }}</h1>
    <button @click="clickButton">Click Me</button>
  </div>
</template>
<script>
export default {
  name: 'SamplePage',
  data() {
    return {
      title: 'This is a sample component',
      counter: 0,
    };
  },
  methods: {
    clickButton() {
      this.counter++;
      this.title = `Button was clicked ${this.counter} times!`;
    },
  },
};
</script>

<style scoped>
div {
  display: flex;
  background-color: white;
  flex-direction: column;
  border-radius: 2px;
  padding: 2rem;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 7px -1px,
    rgba(0, 0, 0, 0.14) 0px 1px 1px 0px, rgba(0, 0, 0, 0.12) 0px 1px 3px 0px;
  margin: 3rem 2rem;
}
div h1 {
  margin-top: 0rem;
}
button {
  padding: 0.5rem 0rem;
  color: white;
  background-color: #780000;
  border: none;
  border-radius: 3px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 7px -1px,
    rgba(0, 0, 0, 0.14) 0px 1px 1px 0px, rgba(0, 0, 0, 0.12) 0px 1px 3px 0px;
}
button:hover {
  cursor: pointer;
  background-color: #7800009d;
  transition-duration: 500ms;
}
button:active {
  background-color: #5e0101;
}
</style>
