<template>
  <div class="container">
    <div v-if="emailMatch === 'match'" class="alert alert-success" role="alert">
      Thank you, your email is verified
    </div>
    <h1 class="text-center">
      Login
    </h1>
    <form style="width: 100%; max-width: 330px; padding: 15px; margin: auto;" @submit.prevent="userLogin">
      <div class="form-group">
        <input id="email" v-model="login.email" placeholder="username" class="form-control" type="text">
      </div>

      <div class="form-group">
        <input id="password" v-model="login.password" placeholder="password" class="form-control" type="password">
      </div>
      <button type="submit" class="btn-block btn-primary btn">
        login
      </button>
    </form>
    <br>
    <div class="text-center">
      <nuxt-link to="/forgotPassword">
        Forgot Password or UserName
      </nuxt-link>
    </div> <br/>
    <div class="text-center">
      Do not have an account? <br/>
      <nuxt-link to="/SignUpForm">
        SIGN UP NOW
      </nuxt-link>
    </div>
  </div>
</template>
<script>
export default {
  layout: 'preLogin',
  data () {
    return {
      login: {
        email: '',
        password: ''
      },
      emailMatch: 'not match'
    }
  },
  async asyncData ({ query, $axios}){
    const response = await $axios.$get(`/api/emailVerification?code=${query.code}&email=${query.email}` )

    return {
      emailMatch : response
    }
  },
  methods: {
    async userLogin () {
      await this.$auth.loginWith('local', { data: this.login })
      this.$router.push('/authentication2FA')
    }
  }
}
</script>
