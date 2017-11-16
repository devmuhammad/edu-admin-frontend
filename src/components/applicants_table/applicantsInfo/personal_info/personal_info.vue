<template src="./personal_info.html">
  
</template>

<script>
export default {
  name:"personaInfo",
  props:["applicant"],
  computed:{
    appFirstchoice(){
      if(this.applicant.serviceFChoice === 'NA'){
        return 'Army'
      }
      else if(this.applicant.serviceFChoice === 'NAF'){
        return "Air Force"
      }
      else if(this.applicant.serviceFChoice === 'NN'){
        return 'Navy'
      }
    },

    appSecondchoice(){
      if(this.applicant.serviceSChoice === 'NA'){
        return 'Army'
      }
      else if(this.applicant.serviceSChoice === 'NAF'){
        return "Air Force"
      }
      else if(this.applicant.serviceSChoice === 'NN'){
        return 'Navy'
      }
    }

  }
}
</script>
