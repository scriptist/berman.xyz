<template>
  <div class="content">
    <h1>{{section}}</h1>
    <div>
      <button @click="moveBy(-1)">Prev</button>
      <button @click="moveBy(1)">Next</button>
    </div>
  </div>
</template>

<script>
import { Sections } from "../constants.js";

export default {
  name: "Content",
  props: {
    section: String
  },
  methods: {
    moveBy(delta) {
      const currentIndex = Sections.indexOf(this.section);
      const newIndex = Math.min(
        Sections.length - 1,
        Math.max(0, currentIndex + delta)
      );
      this.$emit("changeSection", Sections[newIndex]);
    }
  }
};
</script>

<style scoped lang="scss">
.content {
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 100vh;
  padding-bottom: 100px;
  text-align: center;
}

h1 {
  font-family: "Quattrocento", sans-serif;
  font-weight: 300;
  margin: 0;
}

button {
  font-weight: 300;
  margin: 10px 5px;
}
</style>
