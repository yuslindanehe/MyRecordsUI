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
          { Test_Date: '#Wire with DB', Test_Name: '#Wire with DB', Detail_Test_Result: '#Wire with DB' },
                  ]
      }
    }
  }
</script>
