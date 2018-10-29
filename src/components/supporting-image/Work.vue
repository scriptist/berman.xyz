<template>
  <WorkImage :class="`image ${visible && 'visible'}`" />
</template>

<script>
import WorkImage from '../../assets/layers/Work.svg';

export default {
  name: 'Work',
  components: {
    WorkImage,
  },
  props: {
    visible: Boolean,
  },
};
</script>

<style scoped lang="scss">
.image {
  transform: translateX(-100%);
  transition: transform 0.5s;

  &.visible {
    transform: translateX(0);
  }
}
</style>
