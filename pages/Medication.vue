<template>
  <div>
    <b-table striped hover :items="items"></b-table>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        items: [
          { Prescription_Date : 'wire with DB', Medication_Name : '#Wire with DB', Refil_or_Not : '#Wire with DB', Medication_Quantity: '#Wire with DB', Instruction : 'wire with DB', Prescribe_by : 'wire with DB' },
        ]
      }
    }
  }
</script>
