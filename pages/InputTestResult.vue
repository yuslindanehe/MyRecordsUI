<template>
  <div class="container">
    <h3 class=pb-3>Input Patient's Test Result</h3>
    <p>
      This form fill by staff only
    </p>
    <form>
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
        <label for="InputLastName">Last Name</label>
        <input type="text" class="form-control" id="LastName" aria-describedby="LastName">
      </div>
      <div class="form-group">
        <label for="InputDOB">Date of Birth</label>
        <input type="date" class="form-control" id="DOB" aria-describedby="DOB">
      </div>
      <div class="form-group">
        <label for="InputTestDate">Test Date</label>
        <input type="date" class="form-control" id="InputTestDate" aria-describedby="DOB">
      </div>
      <div class="form-group">
        <label for="InputTestName">Test Name</label>
        <input type="text" class="form-control" id="InputTestName" aria-describedby="TestName">
      </div>
      <div class="form-group">
        <label for="InputTestResult">Detail Test Result</label>
        <textarea class="form-control" id="InputTestResult" rows="8"></textarea>
      </div>
      <button type="button" class="btn btn-primary">SUBMIT</button>
    </form>
  </div>
</template>

<script>
  export default {
    name: 'Medication',
    data() {
      return {

        form: {
          patientName: '',
        },
        patientName: [{ text: 'Yuslinda Nehe', value: 0 }, { text: 'Jimmy Ang', value: 2},{ text: 'John Young', value: 3}, { text: 'Ryan Tjai', value: 4}, { text: 'Lisna Nehe', value: 5}]
      }
    }
  }
</script>

<style scoped>

</style>




















