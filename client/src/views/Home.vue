<template>
  <layout name="LayoutDefault">
    <welcome></welcome>
  </layout>
</template>

<script>
import Layout from '../layouts/Layout';
import Welcome from '../components/Welcome';

export default {
  name: `Home`,
  components: {
    Layout,
    Welcome
  },
};
</script>