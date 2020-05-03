<template>
  <div>
    <b-table stacked :items="items"></b-table>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        items: [
          {Patient_Height : 'wire from DB', Patient_Weight: 'wire from DB', Detail_Allergies: 'wire from DB  ___________________', Imunization_History:'wire from DB ____________', Ilness_History: 'wire from DB'},
                  ]
      }
    }
  }
</script>
