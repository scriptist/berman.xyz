<template>
  <div id="app">
    <SupportingImage class="image" :section="section" v-if="!mobile" />
    <Content class="content" :section="section" @changeSection="handleChangeSection" />
  </div>
</template>

<script>
import SupportingImage from './components/SupportingImage.vue';
import Content from './components/Content.vue';
import { SectionKeys } from './constants.js';

const mobileMediaQuery = window.matchMedia ? '(max-width: 550px)' : null;

export default {
  name: 'App',
  components: {
    SupportingImage,
    Content,
  },
  data: () => ({
    mobile: false,
    section: SectionKeys[0],
  }),
  methods: {
    handleChangeSection(section) {
      this.section = section;
    },
    testMediaQuery(e) {
      this.mobile = e.matches;
    },
  },
  created() {
    if (!mobileMediaQuery) return;
    this.testMediaQuery(mobileMediaQuery);
    mobileMediaQuery.addListener(this.testMediaQuery);
  },
  destroyed() {
    if (!mobileMediaQuery) return;
    mobileMediaQuery.removeListener(this.testMediaQuery);
  },
};
</script>

<style lang="scss">
// Reset
* {
  box-sizing: border-box;
}

body {
  margin: 0;
}

img {
  max-width: 100%;
}

input,
textarea,
select,
button {
  font: inherit;
}

// Global styles
h1 {
  font-family: 'Quattrocento', sans-serif;
  font-weight: 300;
  margin: 0;
}
</style>

<style lang="scss" scoped>
// Layout
#app {
  font-family: 'Merriweather Sans', sans-serif;
}

.image {
  background-color: #eb8d4e;
  bottom: 0;
  left: 0;
  position: fixed;
  top: 0;
  width: 50vw;
}

.content {
  background: white;
}

.image + .content {
  padding-left: 50vw;
}
</style>
