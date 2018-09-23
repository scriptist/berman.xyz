<template>
  <h1>{{ msg }}</h1>
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
h1 {
  font-family: "Quattrocento", sans-serif;
  font-weight: 300;
}
</style>
