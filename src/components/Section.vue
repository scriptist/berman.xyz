<script>
import { Sections } from '../constants.js';

export default {
  name: 'Section',
  props: {
    sectionKey: String,
  },
  render() {
    const Content = Sections.get(this.sectionKey);
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
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 35vh 0 35vh;
}
</style>
