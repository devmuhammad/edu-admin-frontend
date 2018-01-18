<template src="./navbar.html">
  
</template>

<script>
import {mapActions} from "vuex"

export default {
  name:"Navbar",
  methods:{
    ...mapActions(["userLogout"])
  }
}
</script>


<style scoped>
.navbar{
    position: fixed;
    width:100%;
    top:0;
    z-index: 1;
}
</style>
