<template>
  <div
    class="todo-item"
    @click="updateCom"
    @mouseover="hover = true"
    @mouseleave="hover = false"
    @dblclick="editState"
    @keyup.enter="updateItem"
    @keyup.esc="backtoPrevious"
  >
    <div v-if="!editing" class="todo-item-label">
      <i v-if="hover" class="fas fa-check"></i>
      <i v-else class="fas_else"></i>
      <span :class="{ 'is-complete': todo.completed }">{{ title }}</span>
      <button v-if="hover" class="del" @click="del(id)">X</button>
    </div>
    <input v-else type="text" v-model="title" @blur="updateItem" v-focus />
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "Todoitem",
  data() {
    return {
      ...this.todo,
      before: "",
      hover: false,
    };
  },
  props: ["todo"],
  directives: {
    focus: {
      inserted: function(el) {
        el.focus();
      },
    },
  },
  methods: {
    ...mapActions(["del", "update"]),
    updateCom() {
      const newTodo = {
        ...this.todo,
        completed: !this.todo.completed,
      };
      this.update(newTodo);
    },
    editState() {
      this.before = this.title;
      this.editing = true;
    },
    updateItem() {
      let newTodo = {
        ...this.todo,
        title: this.title,
      };
      this.update(newTodo);
      this.editing = false;
    },
    backtoPrevious() {
      if (this.before.trim() !== "") {
        this.title = this.before;
      }
      this.editing = false;
    },
  },
};
</script>

<style scoped>
.todo-item {
  background: #f4f4f4;
  border-bottom: 1px #ccc dotted;
  width: 482px;
  cursor: pointer;
  padding: 25px 10px;
}

.fas {
  color: rgb(8, 241, 0);
  border: 1px solid rgb(8, 241, 0);
  border-radius: 50%;
  padding: 2px;
  margin-right: 10px;
}

.fas_else {
  margin: 5px 27px 5px 5px;
}

input[type="text"] {
  background: white;
}
.is-complete {
  text-decoration: line-through;
}

.del {
  background: #fff;
  color: rgb(236, 12, 12);
  border: 1px solid rgb(236, 12, 12);
  padding: 5px 9px;
  border-radius: 50%;
  cursor: pointer;
  float: right;
}
</style>
