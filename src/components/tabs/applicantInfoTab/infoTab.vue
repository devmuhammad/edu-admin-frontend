<template src="./infoTab.html">
  
</template>

<script>
export default {
  name:"infoTab",
  mounted : function (){ return this.checkPresentRoute() },
  data () {
    return {
      currentState:{
        isSchoolActive:false,
        isQualificationsActive:false,
        isChoicesActive:false,
        isDocsActive:false
      }
    }
  },
  methods:{
    checkPresentRoute () {
      let currentPath = window.location.pathname.split('/',4)
          ,parentPath = "/"+currentPath[1];
      let newState = {isSchoolActive:false,isQualificationsActive:false,isChoicesActive:false,isDocsActive:false}
      switch(parentPath)
      {
        case '/applications':
          newState.isSchoolActive = true;
          this.currentState = newState;
          break;
        case '/qualifications':
          newState.isQualificationsActive = true;
          this.currentState = newState
          break;
        case '/choices':
          newState.isChoicesActive = true;
          this.currentState = newState
          break;
        case '/documents':
          newState.isDocsActive = true;
          this.currentState = newState
          break;    
        default:
          newState.isSchoolActive = true;
          this.currentState = newState;
          break;
      }
    }
  }
}
</script>
