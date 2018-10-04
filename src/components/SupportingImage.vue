<script>
import { Sections, SectionKeys } from '../constants.js';

export default {
  name: 'SupportingImage',
  props: {
    sectionKey: String,
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
  render() {
    return (
      <div class="root">
        {this.layers.map((Layer, i) => (
          <Layer class="layer" key={i} />
        ))}
      </div>
    );
  },
};
</script>

<style scoped lang="scss">
.root {
  text-align: center;
  position: relative;
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
    stroke: #7f7f7f;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-width: 2px;
  }

  .fill {
    fill: #7f7f7f;
  }

  .fill-bg {
    fill: #fcdbdb;
  }
}
</style>
