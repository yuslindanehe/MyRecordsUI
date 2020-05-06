<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">MyRecords</a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon" />
      </button>

      <div id="navbarSupportedContent" class="collapse navbar-collapse">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <nuxt-link class="nav-link" to=/MainPage>Home <span class="sr-only">(current)</span></nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link v-if="role === 'patient'" to="/TestResult" class="nav-link">
              Test Results
            </nuxt-link>
            <nuxt-link v-else to="/InputTestResult" class="nav-link">
              Input Test Results
            </nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link v-if="role==='patient'" to="/Medication" class="nav-link">
              Medications
            </nuxt-link>
            <nuxt-link v-else to="/MedicationForm" class="nav-link">
              Medication Form
            </nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link v-if="role==='patient'" class="nav-link" to="/HealthSummary">Health Summary</nuxt-link>
            <nuxt-link v-else class="nav-link" to="/HealthInformation">Health Information</nuxt-link>
          </li>
          <li class="nav-item">
            <span class="nav-link" @click="logout">Logout</span>
          </li>
        </ul>
      </div>
    </nav>
    <nuxt />
    <!-- Bootstrap CSS -->
    <link
      rel="stylesheet"
      href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
      integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
      crossorigin="anonymous"
    >

    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script
      src="https://code.jquery.com/jquery-3.4.1.slim.min.js"
      integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n"
      crossorigin="anonymous"
    />
    <script
      src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"
      integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo"
      crossorigin="anonymous"
    />
    <script
      src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"
      integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6"
      crossorigin="anonymous"
    />
  </div>
</template>

<script>
export default {
  data (){
    return{
      role: this.$auth.user.role
    }
  },
  methods: {
    async logout () {
      await this.$auth.logout()
    }
  }
}
</script>
