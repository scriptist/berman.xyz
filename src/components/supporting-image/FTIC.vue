<template>
  <FTICImage :class="`image ${visible && 'visible'}`" />
</template>

<script>
import FTICImage from '../../assets/layers/FTIC.svg';

export default {
  name: 'FTIC',
  components: {
    FTICImage,
  },
  props: {
    visible: Boolean,
  },
};
</script>

<style scoped lang="scss">
.image {
  transform: translate(-100%, 30%) scale(1.5);
  transition: transform 0.5s;

  &.visible {
    transform: translate(0, 0);
  }
}
</style>
