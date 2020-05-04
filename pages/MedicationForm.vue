<template>
  <div class="container">
    <h3 class=pb-3>Medication Form</h3>
    <p>
      This form fill only by staff
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
        <label for="InputDOB">Date of Birth</label>
        <input type="date" class="form-control" id="DOB" aria-describedby="DOB">
      </div>
      <div class="form-group">
        <label for="InputPersriptionDate">Perscription Date</label>
        <input type="date" class="form-control" id="PersscriptionDate" aria-describedby="PerscribtionDate">
      </div>
      <div class="form-group">
        <label for="InputMedicationName">Medication Name</label>
        <input type="text" class="form-control" id="MedicationName" aria-describedby="MedicationName">
      </div>
      <div class="form-group">
        <label for="InputRefilOrNot">Refil or Not</label>
        <input type="Boolean" class="form-control" id="RefilOrNot" aria-describedby="RefilOrNot">
      </div>
      <div class="form-group">
        <label for="InputMedicationQuantity">Medication Quantity</label>
        <input type="text" class="form-control" id="MedictionQuantity" aria-describedby="MedicationQuantity">
      </div>
      <div class="form-group">
        <label for="InputInstruction">Instruction</label>
        <input type="text" class="form-control" id="MedicationName" aria-describedby="MedicationName">
      </div>
      <div class="form-group">
        <label for="InputPerscribedby">Perscribed by</label>
        <input type="text" class="form-control" id="Perscribedby" aria-describedby="Perscribedby">
      </div>
      <button type="button" class="btn btn-primary">
        SUBMIT
      </button>
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
