<template>
  <div class = "container">
    <h3 class = pb-3>Create New Password</h3>
    <p>Enter your new password. A good password uses a combination of lowercase and uppercase letters, as well as
      numbers. Avoid using a password that is easy for others to guess such as your name or phone number.<p>
    <div class="form-group">
      <label for="newPassword">New Password</label>
      <input v-model="password" type="password" class="form-control" id="newPassword" aria-describedby="NewPassword">
    </div>
    <div class="form-group">
      <label for="retypeNewPassword">Re-type the New Password</label>
      <input v-model="password2" type="password" class="form-control" id="retypeNewPassword" aria-describedby="RetypeNewPassword">
    </div>
    <nuxt-link to="/login">
    <button type="button" class="btn btn-primary">SUBMIT</button>
    </nuxt-link>
  </div>
</template>

<script>
  export default {
    name: 'AdditionalSecurityVerification',
    layout: 'preLogin',
    auth: false
  }
</script>

<style scoped>

</style>
