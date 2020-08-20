import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

let i = 4;
export default new Vuex.Store({
  state: {
    filter: "All",
    todos: [
      {
        id: 1,
        title: "todo 1",
        completed: false,
        editing: false,
      },
      {
        id: 2,
        title: "todo 2",
        completed: false,
        editing: false,
      },
      {
        id: 3,
        title: "todo 3",
        completed: true,
        editing: false,
      },
      {
        id: 4,
        title: "todo 4",
        completed: true,
        editing: false,
      },
    ],
  },
  getters: {
    allTodos: (state) => {
      if (state.filter == "All") {
        return state.todos;
      }
      if (state.filter == "Completed") {
        return state.todos.filter((todo) => todo.completed);
      }
      if (state.filter == "Active") {
        return state.todos.filter((todo) => !todo.completed);
      }
    },
    realState: (state) => {
      return state.todos;
    },
  },
  actions: {
    add: ({ commit }, title) =>
      commit("addTodo", {
        id: i++,
        title: title,
        completed: false,
        editing: false,
      }),
    del: ({ commit }, id) => commit("deltodo", id),
    filter: ({ commit }, value) => commit("filterTodo", value),
    clear: ({ commit }) => commit("clearCompleted"),
    update: ({ commit }, updatedTodo) => commit("update", updatedTodo),
  },
  mutations: {
    addTodo: (state, item) => {
      state.todos.push(item);
    },
    deltodo: (state, id) => {
      state.todos.forEach((todo, index) => {
        if (todo.id === id) {
          state.todos.splice(index, 1);
        }
      });
    },
    filterTodo: (state, value) => {
      state.filter = value;
    },
    clearCompleted: (state) => {
      let newState = state.todos.filter((todo) => !todo.completed);
      state.todos = newState;
    },
    update: (state, updatedTodo) => {
      state.todos.forEach((todo, index) => {
        if (todo.id == updatedTodo.id) {
          state.todos.splice(index, 1, updatedTodo);
        }
      });
    },
  },
});
