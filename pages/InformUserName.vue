<template>
  <div class = "container">
    <h3 class = pb-3>Thank You</h3>
    <p>Below is your MyRecords username. You will need to use this to access your MyRecords account.<p> <br>
    <p> Your MyRecord username: ___________ </p> <br>
    <p> Please click link below to access your account.</p> <br>
    <div class="text-center">
      <nuxt-link to='/login'> Login to MyRecords Account </nuxt-link>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'AdditionalSecurityVerification',
    layout: 'preLogin'
  }
</script>

<style scoped>

</style>
