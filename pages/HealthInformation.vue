<template>
  <div class="container">
    <h3 class=pb-3>Input Patient's Health Information</h3>
    <p>
      This form fill by staff only
    </p>
    <form @submit.prevent="storeHealthInformation">
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
        <label for="InputHeight">Patient Height</label>
        <input type="text" v-model="form.height" class="form-control" id="InputHeight" aria-describedby="InputHeigh">
      </div>
      <div class="form-group">
        <label for="InputWeight">Patient Weight</label>
        <input type="text" v-model="form.weight" class="form-control" id="InputWeight" aria-describedby="InputWeight">
      </div>
      <div class="form-group">
        <label for="InputAllergies">Detail Allergies</label>
        <textarea class="form-control" v-model="form.allergies" id="InputAllergies" rows="3"></textarea>
      </div>
      <div class="form-group">
        <label for="InputImunizationHistory">Imunization History</label>
        <textarea class="form-control" v-model="form.immunizationHistory" id="InputImunizationHistory" rows="3"></textarea>
      </div>
      <div class="form-group">
        <label for="InputIIlnessHistory">Ilness History</label>
        <textarea class="form-control" v-model="form.illnessHistory" id="InputIIlnessHistory" rows="3"></textarea>
      </div>
      <button type="submit" class="btn btn-primary">SUBMIT</button>
    </form>
  </div>
</template>

<script>
  export default {
    name: 'Medication',
    data() {
      return {
        form: {
          patientName : '',
          height: '',
          weight: '',
          allergies: '',
          immunizationHistory: '',
          illnessHistory: '',
        },
      }
    },
    async asyncData ({ $axios }) {
      const patients = await $axios.$get(`api/patients`);
      let data = []
      patients.forEach((patient) => {
        data.push({text: patient.firstName + " " + patient.lastName, value: patient.id})
      })

      return {
        patientName : data
      }
    },
    methods: {
      async storeHealthInformation () {
        await this.$axios.$post(`api/health-information`, {
          patientId : this.form.patientName,
          height : this.form.height,
          weight : this.form.weight,
          allergies : this.form.allergies,
          immunizationHistory : this.form.immunizationHistory,
          illnessHistory : this.form.illnessHistory
        }).then((response) => {
          alert('Thank you, Data is saved successfully')
          this.form.height = ''
          this.form.weight = ''
          this.form.allergies = ''
          this.form.immunizationHistory = ''
          this.form.illnessHistory = ''
        }).catch((response) => {
          alert(response)
        })
      }
    }
  }
</script>

<style scoped>

</style>




















