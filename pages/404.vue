<template>
  <div class = "container">
    <h1>Not Found</h1>
    <p>
      Oops! We couldn't find that page. Try going
      <router-link :to="{ name: 'MainPage'}">home.</router-link>
    </p>
  </div>
</template>

<script>
export default {
  name: '404',
  layout: 'preLogin'
}
</script>

<style scoped>

</style>
