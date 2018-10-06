<script>
import { Sections, SectionKeys } from '../constants.js';

export default {
  name: 'SupportingImage',
  props: {
    sectionKey: String,
  },
  data: function() {
    return { style: this.calculateStyle() };
  },
  computed: {
    layers() {
      const keys = SectionKeys.slice(
        0,
        SectionKeys.indexOf(this.sectionKey) + 1,
      );
      return keys.map(key => Sections.get(key).image);
    },
  },
  methods: {
    calculateStyle() {
      const background = Sections.get(this.sectionKey).color;
      return `
          .supporting-image {
            background-color: ${background};
          }
          .layer .fill-bg {
            fill: ${background};
          }
        `;
    },
  },
  watch: {
    sectionKey() {
      setTimeout(() => (this.style = this.calculateStyle()), 50);
    },
  },
  render() {
    const { layers, style } = this;

    return (
      <div class="supporting-image">
        <style>{style}</style>
        {layers.map((Layer, i) => (
          <Layer class="layer" key={i} />
        ))}
      </div>
    );
  },
};
</script>

<style scoped lang="scss">
.supporting-image {
  // Background defined in component
  text-align: center;
  position: relative;
  transition: background-color 0.5s;
}

.layer {
  position: absolute;
  top: 40%;
  left: 50%;
  width: 100%;
  max-width: 500px;
  transform: translate(-50%, -50%);
}
</style>

<style lang="scss">
.layer {
  .stroke {
    fill: none;
    stroke: #fff;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-width: 2px;
  }

  .fill {
    fill: #fff;
  }

  .fill-bg {
    // Fill defined in component
    transition: fill 0.5s;
  }
}
</style>
