<template>
  <div class = "container">
    <h3 class = pb-3>Additional Security Verification Page</h3>
    <p>
      It is our goal to make sure your health information is safe and secure. Before you log in, you'll need to enter
      a one-time use security code to verify your identity.
    </p>
    <ol>
      <li>We'll send you a code. This might take a few minutes.</li>
      <li>When you receive the code, enter it on this page below.</li>
      <li>After we verify your identity, you will be logged in to MyRecords.</li>
    </ol> <br>

    <div class= "h5" style = "color: blue">How do you like to receive the code?</div>
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
  name: 'AdditionalSecurityVerification',
  layout: 'preLogin'
}
</script>

<style scoped>

</style>
