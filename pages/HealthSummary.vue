<template>
  <div>
    <b-table stacked :items="items"></b-table>
  </div>
</template>

<script>
  export default {
    async asyncData ({ $axios }) {
      return { items: await $axios.$get(`api/health-information/patient` )}
    }
  }
</script>
