<template>
  <div class="container">
    <h3 class=pb-3>Input Patient's Test Result</h3>
    <p>
      This form fill by staff only
    </p>
    <form @submit.prevent="storeTestResult">
      <div class="form-group">
        <label for="inputPatientName">Patient's Name</label>
        <b-form-select
          id="inputPatientName"
          v-model="form.patientName"
          :options="patientName"
          required
        ></b-form-select>
      </div>
      <div class="form-group">
        <label>Ordered By</label>
        <b-form-select
          id="inputStaffName"
          v-model="form.orderedBy"
          :options="staffs"
          required
        ></b-form-select>
      </div>
      <div class="form-group">
        <label for="InputTestDate">Test Date</label>
        <input v-model="form.testDate" type="date" class="form-control" id="InputTestDate" aria-describedby="DOB">
      </div>
      <div class="form-group">
        <label for="InputTestName">Test Name</label>
        <input v-model="form.testName" type="text" class="form-control" id="InputTestName" aria-describedby="TestName">
      </div>
      <div class="form-group">
        <label for="InputTestResult">Detail Test Result</label>
        <textarea v-model="form.testResult" class="form-control" id="InputTestResult" rows="8"></textarea>
      </div>
      <button type="submit" class="btn btn-primary">SUBMIT</button>
    </form>
  </div>
</template>

<script>
  export default {
    name: 'Medication',
    middleware: ['patient'],
    data() {
      return {
        form: {
          patientName: '',
          dob: '',
          testDate: '',
          testName: '',
          testResult: '',
        },
      }
    },
    async asyncData ({ $axios }) {
      const patients = await $axios.$get(`api/patients`);
      let data = []
      patients.forEach((patient) => {
         data.push({text: patient.firstName + " " + patient.lastName, value: patient.id})
      })

      const staff = await $axios.$get(`api/staffs`)
      let staffData = []
      staff.forEach((row) => {
        staffData.push({text: row.firstName + " " + row.lastName, value: row.id})
      })

      return {
        patientName : data,
        staffs : staffData
      };
    },
    methods: {
      async storeTestResult () {
        await this.$axios.$post(`api/test-result`, {
          patientId : this.form.patientName,
          testDate : this.form.testDate,
          testName : this.form.testName,
          testResult : this.form.testResult,
          orderedBy : this.form.orderedBy
        }).then((response) => {
          alert('Thank you, Data is saved successfully')
          this.form.patientName = ''
          this.form.testDate = ''
          this.form.testName = ''
          this.form.testResult = ''
          this.form.orderedBy = ''
        }).catch((response) => {
          alert(response)
        })
      }
    }
  }
</script>

<style scoped>

</style>




















