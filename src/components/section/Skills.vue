<template>
  <div class="skills">
    <h2>Core Front-End Expertise</h2>
    <ul>
      <li>
        <strong>Languages & frameworks</strong>: JavaScript (ESNext), TypeScript, Flow, React.js
        (Expert), Node.js
      </li>
      <li><strong>Data fetching & state</strong>: GraphQL (Relay), Recoil, Redux</li>
      <li><strong>Testing</strong>: Jest, React Testing Library</li>
      <li><strong>Styling</strong>: CSS-in-JS (Emotion), SASS, CSS Modules, PostCSS</li>
      <li><strong>Broader competencies</strong>: Vue.js, Python, PHP, Hack</li>
    </ul>

    <h2>Staff-Level Competencies</h2>
    <ul>
      <li>
        <strong>Architecture</strong>: Large-scale front-end architecture, design systems, web
        performance optimization, API design, accessibility (WCAG/a11y)
      </li>
      <li>
        <strong>Leadership</strong>: Technical strategy & roadmapping, cross-functional leadership,
        senior engineer mentorship, data-driven development (A/B testing)
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Skills',
};
</script>

<style scoped lang="scss">
.skills {
  max-width: 650px;

  @media print {
    max-width: none;
  }

  h2:not(:first-child) {
    margin-top: 12px;
  }

  ul {
    margin-bottom: 0;
    margin-top: 0;
  }

  li:not(:last-child) {
    margin-bottom: 4px;
  }
}
</style>
