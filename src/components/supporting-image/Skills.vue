<template>
  <SkillsImage :class="`image ${visible && 'visible'}`" />
</template>

<script>
import SkillsImage from '../../assets/layers/Skills.svg';

export default {
  name: 'Skills',
  components: {
    SkillsImage,
  },
  props: {
    visible: Boolean,
  },
};
</script>

<style scoped lang="scss">
.image {
  transform: translate(20%, -100%);
  transition: transform 0.5s;

  &.visible {
    transform: translate(0, 0);
  }
}
</style>
