<template>
  <div class="container">
    <h3 class=pb-3>Medication Form</h3>
    <p>
      This form fill only by staff
    </p>
    <form>
      <div class="form-group">
        <label for="InputMedicationName">Medication Name</label>
        <input type="text" class="form-control" id="MedicationName" aria-describedby="MedicationName">
      </div>
      <div class="form-group">
        <label for="InputPersriptionDate">Perscription Date</label>
        <input type="date" class="form-control" id="PersscriptionDate" aria-describedby="PerscribtionDate">
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
    </form>
  </div>
</template>

<script>
  export default {
    name: 'Medication'
  }
</script>

<style scoped>

</style>
