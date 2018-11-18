<template>
  <div class="welcome">
    <h1>Mike Berman</h1>
    <h3>Front end web developer</h3>
  </div>
</template>

<script>
export default {
  name: 'Welcome',
};
</script>

<style scoped lang="scss">
.welcome {
  align-items: center;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: center;

  h1 {
    font-size: 42px;
  }
}
</style>
