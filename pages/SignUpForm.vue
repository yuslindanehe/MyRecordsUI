<template>
  <div class="container">
    <h3 class="pb-3">
      Sign Up Page
    </h3>
    <p>
      Please fill out the form below and click "submit" when you are finished.
    </p>
    <form>
      <div class="form-group">
        <label for="InputEmailAddress">Email Address</label>
        <input id="EmailAddress" type="text" class="form-control" aria-describedby="EmailAddress">
      </div>
      <div class="form-group">
        <label for="InputFirstName">First Name</label>
        <input id="FirstName" type="text" class="form-control" aria-describedby="FirstName">
      </div>
      <div class="form-group">
        <label for="InputLastName">Last Name</label>
        <input id="LastName" type="text" class="form-control" aria-describedby="LastName">
      </div>
      <div class="form-group">
        <label for="InputDOB">Date of Birth</label>
        <input id="DOB" type="date" class="form-control" aria-describedby="DOB">
      </div>
      <div class="form-group">
        <label for="InputAddress">Address</label>
        <input id="Address" type="text" class="form-control" aria-describedby="Address">
      </div>
      <div class="form-group">
        <label for="InputAddress2">Address2</label>
        <input id="Address2" type="text" class="form-control" aria-describedby="Address2">
      </div>
      <div class="form-group">
        <label for="Inputcity">City</label>
        <input id="City" type="text" class="form-control" aria-describedby="City">
      </div>
      <div class="form-group">
        <label for="Inputstate">State</label>
        <input id="State" type="text" class="form-control" aria-describedby="State">
      </div>
      <div class="form-group">
        <label for="InputZipCode">Zip Code</label>
        <input id="ZipCode" type="text" class="form-control" aria-describedby="ZipCode">
      </div>
      <div class="form-group">
        <label for="InputPhoneNumber">Phone Number</label>
        <input id="PhoneNumber" type="text" class="form-control" aria-describedby="PhoneNumber">
      </div>
      <nuxt-link to="/SignUpEmailConfirmation">
        <button type="button" class="btn btn-primary">
          SUBMIT
        </button>
      </nuxt-link>
    </form>
  </div>
</template>

<script>
export default {
  name: 'InputPatient',
  layout: 'preLogin',
  auth: false
}
</script>

<style scoped>

</style>
