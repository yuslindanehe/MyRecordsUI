<template>
  <div style="width: 100%; max-width: 700px; padding: 15px; margin: auto;">
    <h3 class="text-center">Password Reset</h3>
    <form @submit.prevent="forgotPasswordVerification">
      <div class="form-group">
        <label for="emailAddress">MyRecords Email Address</label>
        <input v-model="form.emailAddress" type="text" class="form-control" id="emailAddress" aria-describedby="EmailAddressHelp">
      </div>
      <div class="form-group">
        <label for="zipCode">Zip Code</label>
        <input v-model="form.zipCode" type="text" class="form-control" id="zipCode" aria-describedby="ZipCode">
      </div>
      <div class="form-group">
        <label for="dateOfBirth">Date of Birth</label>
        <input v-model="form.dateOfBirth" type="date" class="form-control" id="dateOfBirth" aria-describedby="Date of Birth"> <br>
      </div>
        <button type="submit" class="btn btn-primary">NEXT</button>
    </form> <br>
    <div v-if="showCode">
      <form @submit.prevent="authenticateCode">
        <div class="form-group">
          <input v-model="form.code" placeholder="Input Code" class="form-control" type="text" id="InputCode">
        </div>
        <button type="submit" class="btn btn-sm btn-primary">Submit</button><br/><br/>
      </form>
        <button type="button" class="btn btn-primary btn-sm" @click="sendEmail">SEND TO MY EMAIL</button>
<!--        <button type="button" class="btn btn-secondary btn-sm" @click="sendText">SEND A TEXT TO MY CELLPHONE</button>-->
    </div>
    <div v-else>
      <p>If you do not remember any of this information, or you do not have a valid e-mail address on a file, you will
        have to contact your MyRecords help desk at supportmyrecords@gmail.com to help you regain access to your MyRecords
        account.</p>
    </div>
    <div v-if="resetPassword">
      <p>Enter your new password. A good password uses a combination of lowercase and uppercase letters, as well as
        numbers. Avoid using a password that is easy for others to guess such as your name or phone number.<p>
      <form @submit.prevent="resetPasswordMethod">
        <div class="form-group">
          <label for="newPassword">New Password</label>
          <input v-model="form.password" @change="matchPassword" type="password" class="form-control" id="newPassword" aria-describedby="NewPassword">
        </div>
        <div class="form-group">
          <label for="retypeNewPassword" >Re-type the New Password</label>
          <input v-model="form.password2" @change="matchPassword" type="password" class="form-control" id="retypeNewPassword" aria-describedby="RetypeNewPassword">
        </div>
        <button :disabled="passwordNotMatch" type="submit" class="btn btn-primary">SUBMIT</button>
      </form>
    </div>
  </div>
</template>
<script>
  export default {
    layout: 'preLogin',
    auth: false,
    data () {
      return {
        form: {
          emailAddress: '',
          zipCode: '',
          dateOfBirth: '',
          code: '',
          password: '',
          password2: ''
        },
        showCode: false,
        resetPassword: false,
        passwordNotMatch: true
      }
    },
    methods: {
      matchPassword() {
        this.passwordNotMatch = true

        if (this.form.password != "") {
          if (this.form.password == this.form.password2)
            this.passwordNotMatch = false
        }
      },
      resetPasswordMethod() {
        this.$axios.$post('/api/reset-password', {
          emailAddress: this.form.emailAddress,
          newPassword: this.form.password
        }).then(() => {
          alert("Thank you, your password is updated");
          this.$router.push("/");
        })
      },
      forgotPasswordVerification() {
        this.$axios.$post('api/forgot-password-verification', {
          emailAddress: this.form.emailAddress,
          zipCode: this.form.zipCode,
          dateOfBirth: this.form.dateOfBirth
        }).then( () => {
            this.showCode = true
          })
          .catch( (response) => {
            alert(response)
          })
      },
      authenticateCode() {
        this.$axios.$post('/api/forgot-password-authenticate-code', {
          emailAddress: this.form.emailAddress,
          code: this.form.code,
        }).then( () => {
          this.resetPassword = true
        }).catch( (response) => {
          alert(response)
        })
      },
      sendEmail() {
        this.sendNotification('email')
      },
      sendText() {
        this.sendNotification('phone')
      },
      sendNotification(method) {
        this.$axios.$post('/api/forgot-password-code', {
          method: method,
          emailAddress: this.form.emailAddress,
        })
      }
    }
  }
</script>
