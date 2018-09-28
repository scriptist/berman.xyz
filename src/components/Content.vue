<template>
  <div class="content" ref="content">
    <Section
      ref="section"
      :key="section"
      :section="section"
      v-for="section in sections" />
  </div>
</template>

<script>
import { Sections } from "../constants.js";
import Section from "./Section.vue";

export default {
  name: "Content",
  components: {
    Section
  },
  data: () => ({
    sections: Sections
  }),
  props: {
    section: String
  },
  methods: {
    checkCurrentSection() {
      const windowMiddle = window.innerHeight / 2;
      const sectionEl = this.$refs.section.find(ref => {
        const rect = ref.$el.getBoundingClientRect();
        return rect.bottom > windowMiddle;
      });
      if (sectionEl && sectionEl.section !== this.section) {
        this.$emit("changeSection", sectionEl.section);
      }
    }
  },
  created() {
    window.addEventListener("scroll", this.checkCurrentSection);
  },
  mounted() {
    this.checkCurrentSection();
  },
  destroyed() {
    window.removeEventListener("scroll", this.checkCurrentSection);
  }
};
</script>

<style scoped lang="scss">
.content {
}
</style>
