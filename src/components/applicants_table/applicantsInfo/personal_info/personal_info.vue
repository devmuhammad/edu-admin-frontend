<template src="./personal_info.html">
  
</template>

<script>
export default {
  name:"personaInfo",
  props:[
    'appRegno',
    'appName',
    'appState',
    'appPhone',
    'appLga',
    'appQualification',
    'appFchoice', 
    'appSchoice', 
    'appPhoto'
  ],
  computed:{
    appFirstchoice(){
      if(this.appFchoice === 'NA'){
        return 'Army'
      }
      else if(this.appFchoice === 'NAF'){
        return "Air Force"
      }
      else if(this.appFchoice === 'NN'){
        return 'Navy'
      }
    },

    appSecondchoice(){
      if(this.appSchoice === 'NA'){
        return 'Army'
      }
      else if(this.appSchoice === 'NAF'){
        return "Air Force"
      }
      else if(this.appSchoice === 'NN'){
        return 'Navy'
      }
    }

  }
}
</script>
