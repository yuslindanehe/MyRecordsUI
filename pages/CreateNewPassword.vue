<template>
  <div class = "container">
    <h3 class = pb-3>Create New Password</h3>
    <p>Enter your new password. A good password uses a combination of lowercase and uppercase letters, as well as
      numbers. Avoid using a password that is easy for others to guess such as your name or phone number.<p>
    <div class="form-group">
      <label for="InputNewPassword">New Password</label>
      <input type="text" class="form-control" id="NewPassword" aria-describedby="NewPassword">
    </div>
    <div class="form-group">
      <label for="InputRetypeNewPassword">Re-type the New Password</label>
      <input type="text" class="form-control" id="RetypeNewPassword" aria-describedby="RetypeNewPassword">
    </div>
    <nuxt-link to="/login">
    <button type="button" class="btn btn-primary">SUBMIT</button>
    </nuxt-link>
  </div>
</template>

<script>
  export default {
    name: 'AdditionalSecurityVerification'
  }
</script>

<style scoped>

</style>
