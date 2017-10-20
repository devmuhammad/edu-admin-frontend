<template src="./applicantTable.html">
  
</template>

<script>
import applicantTableItem from "@/components/applicants_table/applicantTableItem/applicantTableItem"
export default {
  name:"applicantTable",
  data () {
    return {
      applicants: [1,2,3,4,5,6,7,8,9,10]
    }
  },
  components:{applicantTableItem}
}
</script>
