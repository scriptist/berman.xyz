<script>
import { Sections } from '../constants.js';
import SectionTitle from './SectionTitle.vue';

export default {
  name: 'Section',
  components: {
    SectionTitle,
  },
  props: {
    sectionKey: String,
  },
  render() {
    const Content = Sections.get(this.sectionKey).content;
    return (
      <div class="section">
        <SectionTitle sectionKey={this.sectionKey} />
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
