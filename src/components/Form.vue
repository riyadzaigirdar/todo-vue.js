<template>
  <form @submit="addTodo">
    <button type="submit">
      <i class="fa fa-angle-down" aria-hidden="true"></i>
    </button>
    <input type="text" v-model="title" placeholder="Enter Todo" />
  </form>
  <!-- v-bind:disabled="this.title ? false : true" -->
  <!-- // @submit="addTodo" -->
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "Form",
  data() {
    return {
      title: "",
    };
  },
  methods: {
    ...mapActions(["add"]),
    addTodo(e) {
      e.preventDefault();
      this.add(this.title);
      this.title = "";
    },
  },
};
</script>

<style>
form {
  margin-top: 10px;
  display: flex;
  width: 500px;
  outline: none;
}

input[type="text"] {
  flex: 4;
  padding: 20px;
  border: none;
  font-size: 20px;
  background: rgb(246, 243, 243);
}

button[type="submit"] {
  flex: 1;
  padding: 20px 0px;
  background: rgb(211, 207, 207);
  border: none;
  outline: none;
}
</style>
