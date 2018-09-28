<template>
  <div class="section">
    <h1>{{section}}</h1>
  </div>
</template>

<script>
export default {
  name: "Section",
  props: {
    section: String
  }
};
</script>

<style scoped lang="scss">
.section {
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 35vh 0 35vh;
}

h1 {
  font-family: "Quattrocento", sans-serif;
  font-weight: 300;
  margin: 0;
}
</style>
