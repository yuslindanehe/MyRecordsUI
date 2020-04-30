<template>
  <div class="container">
    <h3 class=pb-3>Input Staff's Information</h3>
    <p>
      This form is to be filled out by staff only.
    </p>
    <form>
      <div class="form-group">
        <label for="InputSSN">Social Security Number</label>
        <input type="text" class="form-control" id="SSN" aria-describedby="SSN">
      </div>
      <div class="form-group">
        <label for="InputEmailAddress">Email Address</label>
        <input type="text" class="form-control" id="EmailAddress" aria-describedby="EmailAddress">
      </div>
      <div class="form-group">
        <label for="InputFirstName">First Name</label>
        <input type="text" class="form-control" id="FirstName" aria-describedby="FirstName">
      </div>
      <div class="form-group">
        <label for="InputLastName">Last Name</label>
        <input type="text" class="form-control" id="LastName" aria-describedby="LastName">
      </div>
      <div class="form-group">
        <label for="InputDOB">Date of Birth</label>
        <input type="date" class="form-control" id="DOB" aria-describedby="DOB">
      </div>
      <div class="form-group">
        <label for="InputAddress">Address</label>
        <input type="text" class="form-control" id="Address" aria-describedby="Address">
      </div>
      <div class="form-group">
        <label for="InputAddress2">Address2</label>
        <input type="text" class="form-control" id="Address2" aria-describedby="Address2">
      </div>
      <div class="form-group">
        <label for="Inputcity">City</label>
        <input type="text" class="form-control" id="City" aria-describedby="City">
      </div>
      <div class="form-group">
        <label for="Inputstate">State</label>
        <input type="text" class="form-control" id="State" aria-describedby="State">
      </div>
      <div class="form-group">
        <label for="InputZipCode">Zip Code</label>
        <input type="text" class="form-control" id="ZipCode" aria-describedby="ZipCode">
      </div>
      <div class="form-group">
        <label for="InputPhoneNumber">Phone Number</label>
        <input type="text" class="form-control" id="PhoneNumber" aria-describedby="PhoneNumber">
      </div>
      <div class="form-group">
        <label for="InputPosition">Position</label>
        <input type="text" class="form-control" id="Position" aria-describedby="Position">
      </div>
      <button type="button" class="btn btn-primary">SUBMIT</button>
    </form>
  </div>
</template>

<script>
  export default {
    name: 'InputPatient'
  }
</script>

<style scoped>

</style>




















