<template>
  <div class="skills">
    <ul>
      <li>
        <strong>Languages</strong>: JavaScript (ES6), TypeScript, Flow, CSS, PHP, Hack, Python
      </li>
      <li><strong>Frameworks &amp; Libraries</strong>: React, Vue.js, Node.js</li>
      <li><strong>Tooling & Build Systems</strong>: Webpack, Gulp, PostCSS, SASS</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Skills',
};
</script>

<style scoped lang="scss">
.skills {
  max-width: 600px;

  ul {
    list-style: none;
    margin-top: 0;
    padding-left: 0;
  }

  li:not(:last-child) {
    margin-bottom: 12px;
  }
}
</style>
