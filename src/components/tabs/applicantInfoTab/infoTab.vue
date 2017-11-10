<template src="./infoTab.html">
  
</template>

<script>
export default {
  name:"infoTab",
  props:['dcount'],
  mounted : function (){ return this.checkPresentRoute() },
  beforeDestroy: function (){ return this.checkPresentRoute() },
  data () {
    return {
      currentState:{
        isQualificationsActive:true,
        isDocsActive:false
      }
    }
  },
  methods:{
    checkPresentRoute () {
      let currentPath = window.location.pathname.split('/',4)
          ,parentPath = "/"+currentPath[1];
      let newState = {isQualificationsActive:false,isDocsActive:false}
      console.log(parentPath)
      switch(parentPath)
      {
        case '/applications':
          newState.isQualificationsActive = true;
          this.currentState = newState
          break;
        case '/documents':
          newState.isDocsActive = true;
          this.currentState = newState
          break;
      }
    }
  }
}
</script>
