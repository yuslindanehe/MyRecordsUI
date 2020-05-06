<template>
  <div class="container">
    <h3 class="pb-3">
      Visit Form
    </h3>
    <p>
      This form is to be filled out by staff only.
    </p>
    <form>
      <div class="form-group">
        <label for="InputDoctortName">Doctor Name</label>
        <input id="DoctorName" type="text" class="form-control" aria-describedby="DoctorName">
      </div>
      <div class="form-group">
        <label for="InputNursetName">Nurse Name</label>
        <input id="NursetName" type="text" class="form-control" aria-describedby="NurseName">
      </div>
      <div class="form-group">
        <label for="InputPatientName">Patient Name</label>
        <input id="PatientName" type="text" class="form-control" aria-describedby="PatientName">
      </div>
      <div class="form-group">
        <label for="InputVisitDate">Visit Date</label>
        <input id="VisitDate" type="date" class="form-control" aria-describedby="VisitDate">
      </div>
      <div class="form-group">
        <label for="InputPatientWeight">Patient Weight</label>
        <input id="PatientWeight" type="text" class="form-control" aria-describedby="PatientWeight">
      </div>
      <div class="form-group">
        <label for="InputPatientBloodPressure">Blood Pressure</label>
        <input id="PatientBloodPressure" type="text" class="form-control" aria-describedby="PatientBloodPressure">
      </div>
      <div class="form-group">
        <label for="InputPatientDiagnose">Diagnose</label>
        <input id="PatientDiagnose" type="text" class="form-control" aria-describedby="PatientDiagnose">
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Visit',
  middleware: ['patient'],
}
</script>

<style scoped>

</style>
