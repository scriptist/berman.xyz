<template>
  <div class="company">
    {{name}}<br />
    {{contract ? 'Contract' : 'Full time'}}<br />
    {{formatDate(from)}} &ndash; {{formatDate(to)}}<br />
    <slot></slot>
  </div>
</template>

<script>
import { Months } from '../constants.js';

export default {
  name: 'Company',
  props: {
    name: String,
    contract: Boolean,
    from: Date,
    to: Date,
  },
  methods: {
    formatDate(d) {
      if (d == null) {
        return 'Present';
      }

      return `${Months[d.getMonth()]} ${d.getFullYear()}`;
    },
  },
};
</script>

<style scoped lang="scss">
.company {
}
</style>
