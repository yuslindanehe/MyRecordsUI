<template>
  <div style="width: 100%; max-width: 700px; padding: 15px; margin: auto;">
    <h3 class="text-center">Password Reset</h3>
    <form>
      <div class="form-group">
        <label for="InputUserName">MyRecords User Name</label>
        <input type="text" class="form-control" id="UserName" aria-describedby="UserNameHelp">
      </div>
      <div class="form-group">
        <label for="InputZipCode">Zip Code</label>
        <input type="text" class="form-control" id="ZipCode" aria-describedby="ZipCode">
      </div>
      <div class="form-group">
        <label for="DateOfBirth">Date of Birth</label>
        <input type="date" class="form-control" id="DateOfBirth" aria-describedby="Date of Birth"> <br>
      </div>
      <nuxt-link to="/TermAndConditionPage">
        <button type="button" class="btn btn-primary">NEXT</button>
      </nuxt-link>
    </form> <br>
    <p>If you do not remember any of this information, or you do not have a valid e-mail address on a file, you will
      have to contact your MyRecords help desk at supportmyrecords@gmail.com to help you regain access to your MyRecords
      account.</p>
  </div>
</template>
<script>
  export default {
    layout: 'preLogin'
  }
</script>
