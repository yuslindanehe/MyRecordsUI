<template>
  <div class="container">
    <h3 class=pb-3>Medication Form</h3>
    <p>
      This form fill only by staff
    </p>
    <form @submit.prevent="storeMedication">
      <div class="form-group">
        <label for="inputPatientName">Patient's Name</label>
        <b-form-select
          id="inputPatientName"
          v-model="medication.patientName"
          :options="patientName"
          required
        ></b-form-select>
      </div>
      <div class="form-group">
        <label for="inputPrescriptionDate">Prescription Date</label>
        <input type="date" v-model="medication.date" class="form-control" id="inputPrescriptionDate" aria-describedby="PerscribtionDate">
      </div>
      <div class="form-group">
        <label for="inputMedicationName">Medication Name</label>
        <input type="text" v-model="medication.name" class="form-control" id="inputMedicationName" aria-describedby="MedicationName">
      </div>
      <div class="form-group">
        <label for="inputRefilOrNot">Refil or Not</label>
        <input v-model="medication.refillable" type="Boolean" class="form-control" id="inputRefilOrNot" aria-describedby="RefilOrNot">
      </div>
      <div class="form-group">
        <label for="inputMedicationQuantity">Medication Quantity</label>
        <input v-model="medication.qty" type="text" class="form-control" id="inputMedicationQuantity" aria-describedby="MedicationQuantity">
      </div>
      <div class="form-group">
        <label for="inputInstruction">Instruction</label>
        <input v-model="medication.instruction" type="text" class="form-control" id="inputInstruction" aria-describedby="MedicationName">
      </div>
      <div class="form-group">
        <label>Prescribed By</label>
        <b-form-select
          id="inputStaffName"
          v-model="medication.prescribedBy"
          :options="staffs"
          required
        ></b-form-select>
      </div>
      <button type="submit" class="btn btn-primary">
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
          medication: {
            patientName: '',
            prescriptionDate: '',
            date: '',
            name: '',
            refillable: '',
            qty: '',
            instruction: '',
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
      }
    },
    methods: {
      async storeMedication () {
        await this.$axios.$post(`api/medication`, {
          patient_id: this.medication.patientName,
          date : this.medication.date,
          prescribedBy : this.medication.prescribedBy,
          name : this.medication.name,
          qty : this.medication.qty,
          refillable : this.medication.refillable,
          instruction : this.medication.instruction
        }).then((response) => {
          alert('Thank you, Data is saved successfully')
          this.medication.date = ''
          this.medication.prescribedBy = ''
          this.medication.name = ''
          this.medication.qty = ''
          this.medication.refillable = ''
          this.medication.instruction = ''
        }).catch((response) => {
          alert(response)
        })
      }
    }
  }
</script>

<style scoped>

</style>
