<template>
  <div>
    <h1 class="text-center">Thank You</h1>
    <p class ="text-center">Congratulations! You have completed the registration.
      Please click link below to access your account.</p> <br>
    <div class="text-center">
      <nuxt-link to='/login'> Login to MyRecords Account </nuxt-link>
    </div>
  </div>
</template>
<script>
  export default {
    layout: 'preLogin'
  }
</script>
