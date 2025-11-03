<template>
  <div class="contact">
    <table>
      <tr>
        <th>Location:</th>
        <td>Sydney, Australia</td>
      </tr>
      <tr>
        <th>Email:</th>
        <td> <a href="mailto:mike@berman.xyz">mike@berman.xyz</a></td>
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
