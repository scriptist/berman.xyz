<template>
  <ContactImage :class="`image ${visible && 'visible'}`" />
</template>

<script>
import ContactImage from '../../assets/layers/Contact.svg';

export default {
  name: 'Contact',
  components: {
    ContactImage,
  },
  props: {
    visible: Boolean,
  },
};
</script>

<style scoped lang="scss">
.image {
  transform: translate(60%, 100%) scale(2);
  transition: transform 0.5s;

  &.visible {
    transform: translate(0, 0);
  }
}
</style>
