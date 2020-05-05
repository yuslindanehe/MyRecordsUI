<template>
  <div class="container">
    <h3 class="pb-3">
      Sign Up Page
    </h3>
    <p>
      Please fill out the form below and click "submit" when you are finished.
    </p>
    <form @submit.prevent="signUp">
      <div class="form-group">
        <label for="InputEmailAddress">Email Address</label>
        <input  v-model = "form.emailAddress" id="InputEmailAddress" type="text" class="form-control" aria-describedby="EmailAddress">
      </div>
      <div class="form-group">
        <label for="InputFirstName">First Name</label>
        <input v-model = "form.firstName" id="InputFirstName" type="text" class="form-control" aria-describedby="FirstName">
      </div>
      <div class="form-group">
        <label for="InputLastName">Last Name</label>
        <input v-model = "form.lastName" id="InputLastName" type="text" class="form-control" aria-describedby="LastName">
      </div>
      <div class="form-group">
        <label for="InputDOB">Date of Birth</label>
        <input v-model = "form.dateOfBirth" id="DOB" type="date" class="form-control" aria-describedby="DOB">
      </div>
      <div class="form-group">
        <label for="InputAddress">Address</label>
        <input v-model = "form.address" id="Address" type="text" class="form-control" aria-describedby="Address">
      </div>
      <div class="form-group">
        <label for="InputAddress2">Address2</label>
        <input v-model = "form.address2" id="Address2" type="text" class="form-control" aria-describedby="Address2">
      </div>
      <div class="form-group">
        <label for="Inputcity">City</label>
        <input v-model = "form.city" id="City" type="text" class="form-control" aria-describedby="City">
      </div>
      <div class="form-group">
        <label for="Inputstate">State</label>
        <input v-model = "form.state" id="State" type="text" class="form-control" aria-describedby="State">
      </div>
      <div class="form-group">
        <label for="InputZipCode">Zip Code</label>
        <input v-model = "form.zipCode" id="ZipCode" type="text" class="form-control" aria-describedby="ZipCode">
      </div>
      <div class="form-group">
        <label for="InputPhoneNumber">Phone Number</label>
        <input v-model = "form.phoneNumber" id="PhoneNumber" type="text" class="form-control" aria-describedby="PhoneNumber">
      </div>
      <div class="form-group">
        <label for="InputPassword">Password</label>
        <input v-model = "form.password" id="InputPassword" type="text" class="form-control" aria-describedby="Password">
      </div>
        <button type="submit" class="btn btn-primary">
          SUBMIT
        </button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'InputPatient',
  layout: 'preLogin',
  auth: false,
  data () {
    return {
      form: {
        emailAddress: '',
        firstName: '',
        lastName: '',
        dateOfBirth: '',
        address: '',
        address2: '',
        city: '',
        state: '',
        zipCode: '',
        phoneNumber: '',
        password: ''
      }
    }
  },
  methods:{
    async signUp () {
      await this.$axios.$post(`api/signUp`, {
        emailAddress: this.form.emailAddress,
        firstName: this.form.firstName,
        lastName: this.form.lastName,
        dob: this.form.dateOfBirth,
        address: this.form.address,
        address2: this.form.address2,
        city: this.form.city,
        state: this.form.state,
        zipCode: this.form.zipCode,
        phoneNumber: this.form.phoneNumber,
        password: this.form.password
      }).then(() =>{
        this.$router.push('/SignUpEmailConfirmation')
      }).catch((response)=>{
        alert(response)
      })
    }
  }
}
</script>

<style scoped>

</style>
