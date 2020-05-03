<template>
  <div class="container">
    <h3 class=pb-3>Input Patient's Health Information</h3>
    <p>
      This form fill by staff only
    </p>
    <form>
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
    name: 'InputPatient'
  }
</script>

<style scoped>

</style>




















