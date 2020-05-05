<template>
  <div class="container">
    <p>
      Hello patient,
    <br>
      <br>
    Welcome to MyResult! Minimize wait time at your health record appointment and reduce unnecessary
      papers forms by taking advantage of this secure patient portal.</p>

  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'MainPage',
  middleware: ['authenticated2fa'],
  computed: {
    ...mapGetters(['isAuthenticated', 'loggedInUser'])
  }
}
</script>

<style scoped>

</style>
