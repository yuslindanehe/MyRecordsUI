<template>
  <div style="width: 100%; max-width: 700px; padding: 15px; margin: auto;">
    <h3 class="text-center">Password Reset</h3>
    <form @submit.prevent="forgotPasswordVerification">
      <div class="form-group">
        <label for="userName">MyRecords User Name</label>
        <input type="text" class="form-control" id="userName" aria-describedby="UserNameHelp">
      </div>
      <div class="form-group">
        <label for="zipCode">Zip Code</label>
        <input type="text" class="form-control" id="zipCode" aria-describedby="ZipCode">
      </div>
      <div class="form-group">
        <label for="dateOfBirth">Date of Birth</label>
        <input type="date" class="form-control" id="dateOfBirth" aria-describedby="Date of Birth"> <br>
      </div>
        <button type="button" class="btn btn-primary">NEXT</button>
    </form> <br>
    <p>If you do not remember any of this information, or you do not have a valid e-mail address on a file, you will
      have to contact your MyRecords help desk at supportmyrecords@gmail.com to help you regain access to your MyRecords
      account.</p>
  </div>
</template>
<script>
  export default {
    layout: 'preLogin',
    auth: false,
    methods: {
      forgotPasswordVerification() {
        this.$router.push("/AdditionalSecurityVerification");
      }
    }
  }
</script>
