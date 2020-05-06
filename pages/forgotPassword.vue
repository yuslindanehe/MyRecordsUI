<template>
  <div style="width: 100%; max-width: 700px; padding: 15px; margin: auto;">
    <h3 class="text-center"> Forgot Password</h3> <br>
    <p class="text-center"> What would you like help with?</p>
    <div style="width: 100%; max-width: 330px; padding: 15px; margin: auto;">
      <nuxt-link to="/forgotPasswordForm" class="btn btn-primary btn-lg active btn-block"
                 role="button" aria-pressed="true">Forgot Password
      </nuxt-link>
      <br>
<!--      <nuxt-link to="/forgotUserNameForm" class="btn btn-secondary btn-lg active btn-block"-->
<!--                 role="button" aria-pressed="true">Forgot User Name-->
<!--      </nuxt-link>-->
    </div>
  </div>
</template>
<script>
  export default {
    layout: 'preLogin',
    auth: false,
  }
</script>
