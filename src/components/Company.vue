<template>
  <div class="company">
    <div class="left">
      <div class="name">
        {{ name }}
      </div>
      <div class="dates">{{ formatDate(from) }} &ndash; {{ formatDate(to) }}<br /></div>
      <div class="contract" v-if="contract">Contract</div>
    </div>
    <div class="right">
      <slot></slot>
    </div>
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

      // TODO: Non-breaking space
      return `${Months[d.getMonth()]} ${d.getFullYear()}`;
    },
  },
};
</script>

<style scoped lang="scss">
.company {
  display: flex;
  page-break-inside: avoid;

  &:not(:last-child) {
    margin-bottom: 36px;

    @media print {
      margin-bottom: 24px;
    }
  }

  .left {
    flex: 1 0 6.25rem;
  }

  .right {
    color: #364;
    flex: 2 0 250px;
    font-size: 0.875em;
    line-height: 1.5;
    margin-left: 20px;

    li:not(:last-child) {
      margin-bottom: 8px;
    }

    @media print {
      color: inherit;
    }
  }

  .name {
    color: #474;
    font-size: 1.25em;

    @media print {
      color: inherit;
      margin-bottom: 4px;
    }
  }

  .dates {
    font-size: 0.75em;
    line-height: 1.4;
    text-transform: uppercase;

    @media print {
      line-height: 1;
    }
  }

  .contract {
    background: #729974;
    border-radius: 4px;
    color: white;
    display: inline-block;
    font-size: 0.75em;
    padding: 3px 6px;

    @media print {
      background: none;
      color: inherit;
      padding: 0;
    }
  }

  @media print, screen and (max-width: 1000px) {
    display: block;

    .right {
      margin-left: 24px;
      margin-top: 8px;
    }
  }
}
</style>
