<template>
  <layout name="LayoutDefault">
    <song-table></song-table>
  </layout>
</template>

<script>
import Layout from '../layouts/Layout';
import SongTable from '../components/SongTable';

export default {
  name: `Queue`,
  components: {
    Layout,
    SongTable
  },
};
</script>