<template>
  <div class="skills">
    <div class="col">
      <h2>Languages</h2>
      <ul>
        <li>JavaScript</li>
        <ul>
          <li>ES6</li>
          <li>TypeScript</li>
          <li>Flow</li>
          <li>Node.js</li>
        </ul>
        <li>CSS</li>
        <ul>
          <li>SASS</li>
          <li>LESS</li>
          <li>PostCSS</li>
        </ul>
        <li>HTML5</li>
        <li>PHP</li>
        <li>Python</li>
      </ul>
    </div>

    <div class="col">
    <h2>Libraries</h2>
      <ul>
        <li>React</li>
        <li>Vue.js</li>
        <li>AngularJS</li>
        <li>Webpack</li>
        <li>Gulp</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Skills',
};
</script>

<style scoped lang="scss">
.skills {
  display: flex;
  max-width: 600px;

  .col {
    flex: 1 0 0;
  }

  @media screen and (max-width: 850px) {
    display: block;
  }
}
</style>
