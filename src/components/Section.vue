<script>
import { Sections } from '../constants.js';

export default {
  name: 'Section',
  props: {
    sectionKey: String,
  },
  render() {
    const Content = Sections.get(this.sectionKey).content;
    return (
      <div class="section">
        <Content />
      </div>
    );
  },
};
</script>

<style scoped lang="scss">
.section {
  padding: 35vh 32px 35vh;
}
</style>
