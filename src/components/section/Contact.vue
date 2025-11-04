<template>
  <div class="contact">
    <table>
      <tbody>
        <tr>
          <th>Email:</th>
          <td><a href="mailto:mike@berman.xyz">mike@berman.xyz</a></td>
        </tr>
        <tr>
          <th>LinkedIn:</th>
          <td>
            <a href="https://www.linkedin.com/in/mikeyberman/" target="_blank"
              >linkedin.com/in/mikeyberman</a
            >
          </td>
        </tr>
        <tr>
          <th>GitHub:</th>
          <td><a href="https://github.com/scriptist" target="_blank">github.com/scriptist</a></td>
        </tr>
        <tr>
          <th>Location:</th>
          <td>Sydney, Australia</td>
        </tr>
      </tbody>
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
  table {
    table-layout: fixed;
    width: 100%;
  }

  th {
    text-align: left;
    width: 90px;
  }

  td {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  th,
  td {
    padding-bottom: 12px;

    @media print {
      padding-bottom: 6px;
    }
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
