<template>
  <div class="contact">
    <table>
      <tr>
        <th>Email:</th>
        <td><a href="mailto:mike@berman.xyz">mike@berman.xyz</a></td>
      </tr>
      <tr>
        <th>LinkedIn:</th>
        <td><a href="https://www.linkedin.com/in/mikeyberman/" target="_blank">linkedin.com/in/mikeyberman</a></td>
      </tr>
      <tr>
        <th>GitHub:</th>
        <td><a href="https://github.com/scriptist" target="_blank">github.com/scriptist</a></td>
      </tr>
      <tr>
        <th>Location:</th>
        <td>Sydney, Australia</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: 'Contact',
};
</script>

<style scoped lang="scss">
.contact {
  th {
    padding-right: 16px;
    text-align: left;
  }

  th, td {
    padding-bottom: 12px;
  }

  a {
    color: inherit;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
}
</style>
