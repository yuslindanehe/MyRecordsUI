<template>
  <div class="container">
    <form>
      <div class="form-group">
        <label for="twoFACode">Please enter the code that you got on your phone:</label>
        <input v-model="code" type="text" class="form-control" id="twoFACode">
      </div>
      <button type="button" class="btn btn-primary" @click="authenticateCode()">Submit</button>
      <button type="button" class="btn btn-primary" @click="sendCode()">Send the code again</button>
    </form>
  </div>
</template>

import { mapMutations } from 'vuex'

<script>
export default {
  layout: 'preLogin',
  name: 'Authentication2FA',
  data () {
    return {
      code : '',
      count : 0
    }
  },
  methods: {
    async authenticateCode () {
      console.log(this.code)
      await this.$axios.$post('/api/auth/authenticate-code', {
        code: this.code
      }).then((response) => {
        this.$store.commit('authentication2FA/setAuthenticate2FA', true)
        this.$router.push('/MainPage')
      }).catch((response) => {
        alert(response)
      })
    },
    async sendCode () {
      this.count++
      if(this.count > 3)
        alert("Please don't abuse the system");
      else {
        await this.$axios.$get('/api/auth/send-code')
          .then(() => {
            alert("Please check your phone")
          }).catch((response) => {
            alert(response)
          })
      }
    }
  }
}
</script>

<style scoped>

</style>
