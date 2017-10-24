<template src="./mainTab.html">
  
</template>

<script>
export default {
  name:"mainTab",
  data () {
    return {
      currentState:{
        dashboard_active:false,
        applications_active:false,
        reports_active:false,
        admin_active:false
      }
    }
  },
  mounted: function() { return this.checkPresentRoute() },
  methods:{
    checkPresentRoute () {
      let currentPath = window.location.pathname.split('/',4)
          ,parentPath = "/"+currentPath[1];
      let newState = { dashboard_active:false, applications_active:false, reports_active:false, admin_active:false}
      switch(parentPath)
      {
        case '/':
          newState.dashboard_active = true;
          this.currentState = newState;
          break;
        case '/applications':
          newState.applications_active = true;
          this.currentState = newState
          break;  
        case '/reports':
          newState.reports_active = true;
          this.currentState = newState
          break;
        case '/admin':
          newState.admin_active = true;
          this.currentState = newState
          break;  
        default:
          newState.dashboard_active = true;
          this.currentState = newState;
          break;
      }
    }
  }
}
</script>
