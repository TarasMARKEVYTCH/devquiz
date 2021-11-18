<template>
  <component :is='layout'>
  <router-view />

  </component>
</template>

<script>
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import EmptyLayout from '@/layouts/EmptyLayout';
import MainLayout from '@/layouts/MainLayout';
export default {
  name: 'app',
  computed: {
    layout(){
      return (this.$route.meta.layout || 'empty') + '-layout'
    }
  },
  components: {
    EmptyLayout, MainLayout
  },
}
</script>

<style lang="scss">

</style>
