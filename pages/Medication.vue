<template>
  <div>
    <b-table striped hover :items="items"></b-table>
  </div>
</template>

<script>
  export default {
    async asyncData ({ $axios }) {
      return { items: await $axios.$get(`api/medication/patient` )}
    }
  }
</script>
