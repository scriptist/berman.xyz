<script>
import { Sections, SectionKeys } from '../constants.js';

export default {
  name: 'SupportingImage',
  props: {
    sectionKey: String,
  },
  computed: {
    style() {
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
  render() {
    const { style } = this;
    const sectionIndex = SectionKeys.indexOf(this.sectionKey);

    return (
      <div class="supporting-image">
        <style>{style}</style>
        {SectionKeys.map((key, i) => {
          const Layer = Sections.get(key).image;
          return <Layer class="layer" visible={i <= sectionIndex} />;
        })}
      </div>
    );
  },
};
</script>

<style scoped lang="scss">
.supporting-image {
  // Background defined in component
  overflow: hidden;
  position: relative;
  text-align: center;
  transition: background-color 0.5s;
}

.layer {
  left: 50%;
  margin-left: -50%;
  margin-top: -50%;
  max-width: 500px;
  position: absolute;
  top: 30%;
  width: 100%;
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
