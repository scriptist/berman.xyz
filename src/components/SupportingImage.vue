<template>
  <div class="root">
      <img class="layer" :src="`/layers/${layer}.png`" v-for="layer in layers">
  </div>
</template>

<script>
import { Sections } from "../constants.js";

export default {
  name: "SupportingImage",
  props: {
    section: String
  },
  computed: {
    layers() {
      return Sections.slice(0, Sections.indexOf(this.section) + 1);
    }
  }
};
</script>

<style scoped lang="scss">
.root {
  text-align: center;
  position: relative;
}

.layer {
  position: absolute;
  top: 40%;
  left: 50%;
  width: 100%;
  max-width: 500px;
  transform: translate(-50%, -50%);
}
</style>
