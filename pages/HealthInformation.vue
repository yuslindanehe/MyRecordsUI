<template>
  <div class="container">
    <h3 class=pb-3>Input Patient's Health Information</h3>
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
        <label for="InputHeight">Patient Height</label>
        <input type="text" class="form-control" id="InputHeight" aria-describedby="InputHeigh">
      </div>
      <div class="form-group">
        <label for="InputWeight">Patient Weight</label>
        <input type="text" class="form-control" id="InputWeight" aria-describedby="InputWeight">
      </div>
      <div class="form-group">
        <label for="InputAllergies">Detail Allergies</label>
        <textarea class="form-control" id="InputAllergies" rows="3"></textarea>
      </div>
      <div class="form-group">
        <label for="InputImunizationHistory">Imunization History</label>
        <textarea class="form-control" id="InputImunizationHistory" rows="3"></textarea>
      </div>
      <div class="form-group">
        <label for="InputIIlnessHistory">Ilness History</label>
        <textarea class="form-control" id="InputIIlnessHistory" rows="3"></textarea>
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




















