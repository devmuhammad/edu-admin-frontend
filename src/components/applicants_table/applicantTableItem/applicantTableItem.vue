<template src="./applicantTableItem.html">
  
</template>

<script>
import applicantsInfo from "@/components/applicants_table/applicantsInfo/applicantsInfo"

export default {
  name:"applicanTtableItem",
  props:['applicant'],
  data () {
    return {
      isActive:false
    }
  },
  methods: {
    closeModal() {this.isActive = !this.isActive}
  },
  components:{applicantsInfo}
}
</script>
