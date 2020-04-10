<template>
  <div class="container">
    <h3 class=pb-3>Continuation Additional Security Verification</h3>
    <p>It is our goal to make sure your health information is safe and secure. <b></b>
      Before you log in, you'll need to enter a one-time use security code to verify your identity.
      It is our goal to make sure your health information is safe and secure. Before you log in, you'll need to enter a
      one-time use security code to verify your identity.
      MyChart has sent you a code.
    <p>

    <p>Enter that code here to verify your identity. </p>
    </p>
    <form style="width: 100%; max-width: 330px; padding: 15px; margin: auto;">
      <div class="form-group">
        <input placeholder="Input Code" class="form-control" type="text" id="InputCode">
      </div>
      <nuxt-link to="/CreateNewPassword">
        <button type="button" class="btn btn-primary">SUBMIT</button>
      </nuxt-link>
    </form>

    <p>
      <Bold>Didn't receive the code after a few minutes?</Bold>
    </p>

    <div class="h5" style="color: blue">If you haven't received the code, we can send it to you again. Just click
      below.
    </div>
    <nuxt-link to="/ContinuationAdditionalSecurityVerification">
      <button type="button" class="btn btn-primary btn-sm">SEND TO MY EMAIL</button>
    </nuxt-link>
    <nuxt-link to="/ContinuationAdditionalSecurityVerification">
      <button type="button" class="btn btn-secondary btn-sm">SEND A TEXT TO MY CELLPHONE</button>
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
