<template>
  <div style = "width: 100%; max-width: 700px; padding: 15px; margin: auto;">
    <h3 class = "text-center">Recover MyRecords UserName</h3>
    <form>
      <div class="form-group">
        <label for="InputFirstName">First Name</label>
        <input type="text" class="form-control" id="FirstName" aria-describedby="FirstNameHelp">
      </div>
      <div class="form-group">
        <label for="InputLastName">Last Name</label>
        <input type="text" class="form-control" id="LastName" aria-describedby="LastNameHelp">
      </div>
      <div class="form-group">
        <label for="InputZipCode">Zip Code</label>
        <input type="text" class="form-control" id="ZipCode" aria-describedby="ZipCode">
      </div>
      <div class="form-group">
        <label for="DateOfBirth">Date of Birth</label>
        <input type="date" class="form-control" id="DateOfBirth" aria-describedby="Date of Birth">
      </div>
      <nuxt-link to="/AdditionalSecurityVerificationUserName">
      <button type="button" class="btn btn-primary">SUBMIT</button>
      </nuxt-link>
    </form>
    <br>
    <p>If you have an e-mail address on file, then your MyRecords Username will be sent to your e-mail account. <br>
      If you do not remember any of this information, or you do not have a valid e-mail address on a file, you will
      have to contact your MyRecords help desk at supportmyrecords@gmail.com to help you regain access to your MyRecords
      account.</p>
  </div>
</template>
<script>
  export default {
    layout: 'preLogin',
    auth: false,
  }
</script>
