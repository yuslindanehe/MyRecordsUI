<template>
  <div class="container">
    <h3 class=pb-3>Input Patient's Test Result</h3>
    <p>
      This form fill by staff only
    </p>
    <form>
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
    name: 'InputPatient'
  }
</script>

<style scoped>

</style>




















