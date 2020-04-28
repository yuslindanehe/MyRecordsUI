<template>
  <div>
    <h1 class="text-center">
      Login
    </h1>
    <form style="width: 100%; max-width: 330px; padding: 15px; margin: auto;" @submit="userLogin">
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
    </div>
    <div class="text-center">
      Do not have an account?
    </div>
    <nuxt-link to="/SignUpForm">
      <button class="btn btn-block btn-link">
        SIGN UP NOW
      </button>
    </nuxt-link>
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
      }
    }
  },
  methods: {
    async userLogin () {
      await this.$auth.loginWith('local', { data: this.login })
      this.$router.push('/MainPage')
    }
  }
}
</script>
