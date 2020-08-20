<template>
  <div class="filterbox">
    <div class="filterbox__items">
      <div class="filterbox__left">{{ remain }} items left</div>
      <div class="filterbox__middle">
        <span @click="filterCom">All</span>
        <span @click="filterCom">Active</span>
        <span @click="filterCom">Completed</span>
      </div>
      <div class="filterbox__right" @click="clear">
        Clear completed
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "Filterbox",
  props: ["remain"],
  methods: {
    ...mapActions(["filter", "clear"]),
    filterCom(e) {
      this.filter(e.target.innerText);
    },
  },
};
</script>

<style scoped>
.filterbox {
  width: 500px;
}

.filterbox__items {
  display: flex;
  justify-content: space-between;
  justify-items: center;
  text-align: center;
  padding: 20px 5px;
}

.filterbox__left {
  flex: 1;
}

.filterbox__middle {
  flex: 2;
}

.filterbox__middle > span {
  margin-right: 10px;
  cursor: pointer;
}

.filterbox__middle > span:nth-child(1) {
  padding: 5px 8px;
  border: 1px solid black;
  border-radius: 2px;
}

.filterbox__right {
  flex: 1;
  cursor: pointer;
}
</style>
