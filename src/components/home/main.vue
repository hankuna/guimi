<template>
  <div class="home-wrapper">
    <!-- <headers></headers> -->
    <sections></sections>
    <footers></footers>
  </div>
</template>

<script>
  import Headers from './main/header.vue'
  import Sections from './main/section.vue'
  import Footers from './main/footer.vue'
  export default {
    name: 'home-wrapper',
    components: {
      // Headers,
      Sections,
      Footers
    }
  }
</script>

<style scoped>
  .home-wrapper {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
  }
</style>