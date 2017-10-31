<template src="./applicantsInfo.html">
  
</template>

<script>
import infoTab from "@/components/tabs/applicantInfoTab/infoTab"
import personalInfo from "./personal_info/personal_info"

export default {
  name:"applicantsInfo",
  props:["isActive", "closeModal"],
  components:{infoTab,personalInfo}
}
</script>

<style lang="scss" scoped>
  $modal-content-width:1040px;
</style>

