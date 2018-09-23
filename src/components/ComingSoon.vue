<template>
  <div class="coming-soon">
    <img alt="Mike" src="../assets/mike-draft.png">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String
  }
};
</script>

<style scoped lang="scss">
.coming-soon {
  text-align: center;
}
h1 {
  font-family: "Quattrocento", sans-serif;
  font-weight: 300;
}
</style>
