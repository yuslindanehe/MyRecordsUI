<template>
      <div class="container">
        <h3 class=pb-3>Input Patient's Information</h3>
        <p>
          This form fill by staff only
        </p>
        <form>
            <div class="form-group">
              <label for="InputDoctortName">Doctor Name</label>
              <input type="text" class="form-control" id="DoctorName" aria-describedby="DoctorName">
            </div>
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
