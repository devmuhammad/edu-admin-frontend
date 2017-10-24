<template src="./dashTab.html">
  
</template>

<script>
export default {
  name:"dashTab",
  props:['tableLink','graphLink'],
  mounted: function () { this.checkRoute() },
  data () {
    return {
      isTableRoute:false,
      isGraphRoute:false
    }
  },
  methods: {
    checkRoute () {
      const pathname = window.location.pathname
      ,current_route = "/"+pathname.split("/",3)[1]

      switch(current_route)
      {
        case '/graph':
          this.isGraphRoute = true
          break
        case '/table':
          this.isTableRoute = true  
          break
        default: 
          this.isTableRoute = true
          break
      }
    }
  }
}
</script>
