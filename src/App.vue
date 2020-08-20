<template>
  <div id="app">
    <h1>todos</h1>
    <Form />
    <div v-for="todo in allTodos" :key="todo.id">
      <Todoitem v-bind:todo="todo" />
    </div>

    <Filterbox v-if="remaining" :remain="remaining" />
  </div>
</template>

<script>
import Form from "./components/Form";
import Todoitem from "./components/Todoitem";
import Filterbox from "./components/Filterbox";
import { mapGetters } from "vuex";

export default {
  name: "App",
  computed: {
    ...mapGetters(["allTodos", "realState"]),
    remaining() {
      return this.realState.length;
    },
  },
  methods: {},
  components: {
    Form,
    Todoitem,
    Filterbox,
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-shadow: border-box;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#app {
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
h1 {
  color: rgb(206, 164, 197);
  font-size: 100px;
}
</style>
