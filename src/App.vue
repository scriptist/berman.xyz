<template>
  <div id="app">
    <ComingSoon msg="Coming Soon"/>
  </div>
</template>

<script>
import ComingSoon from "./components/ComingSoon.vue";

export default {
  name: "app",
  components: {
    ComingSoon
  }
};
</script>

<style lang="scss">
* {
  box-sizing: border-box;
}

html,
body {
  margin: 0;
  height: 100%;
  padding: 0;
}

img {
  max-width: 100%;
}

#app {
  align-items: center;
  background-color: #eb8d4e;
  color: white;
  display: flex;
  flex-direction: column;
  font-family: sans-serif;
  justify-content: center;
  min-height: 100%;
}
</style>
