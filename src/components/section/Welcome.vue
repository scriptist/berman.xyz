<template>
  <div class="welcome">
    <Logo class="logo" />
    <h1>Mike Berman</h1>
    <h3>Staff Front End Engineer &mdash; Sydney, Australia</h3>
    <p>
      15+ years of experience driving large-scale application architecture &amp;
      cross-organisational technical leadership. Proven record of driving multi-year projects,
      mentoring senior engineers, and shipping high-impact internal tools for 100,000+ users at
      Meta.
    </p>
  </div>
</template>

<script>
import Logo from '../../assets/logo.svg';

export default {
  name: 'Welcome',
  components: { Logo },
};
</script>

<style scoped lang="scss">
.welcome {
  align-items: center;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: center;
  text-align: center;

  .logo {
    height: 64px;
    margin-bottom: 32px;
    width: 64px;
  }

  h1 {
    font-size: 42px;
  }

  p {
    font-size: 0.875em;
    margin: 24px auto 0;
    width: 75%;

    @media print {
      font-size: 1em;
      margin-top: 12px;
      width: 87%;
    }
  }
}
</style>
