<script>
import { Sections } from '../constants.js';
import SectionTitle from './SectionTitle.vue';

const hexToRgb = hex => {
  const bigint = parseInt(hex.substr(1), 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;

  return `${r}, ${g}, ${b}`;
};

export default {
  name: 'Section',
  components: {
    SectionTitle,
  },
  props: {
    current: Boolean,
    sectionKey: String,
  },
  render() {
    const section = Sections.get(this.sectionKey);
    const Content = section.content;
    const backgroundColor = this.current
      ? `rgba(${hexToRgb(section.color)}, .5)`
      : '';

    return (
      <div
        class={`section ${this.current ? 'current' : ''}`}
        style={{ backgroundColor }}
      >
        <SectionTitle sectionKey={this.sectionKey} />
        <Content />
      </div>
    );
  },
};
</script>

<style scoped lang="scss">
.section {
  background: #aaa;
  min-height: 60vh;
  opacity: 0.2;
  padding: 10vh 32px 10vh;
  position: relative;
  transition: background-color 0.5s, opacity 0.5s;

  &.current {
    opacity: 1;
  }

  &:first-child,
  &:last-child {
    min-height: 80vh;
  }
}
</style>
