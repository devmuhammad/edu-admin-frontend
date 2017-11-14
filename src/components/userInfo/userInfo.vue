<template src="./userInfo.html">
  
</template>

<script>

import changePassword from "@/components/changePassword/changePassword"

export default {
  name:"userInfo",
  data () {
    return {
      openModal:false,
      currentDate: new Date().toDateString()
    }
  },

methods:{
    setPasswordModalActive () { return this.openModal = !this.openModal },


},
components: {changePassword}
}
</script>

<style>
.user-info{
    margin-top: 80px;
    margin-bottom: 20px;
}
.date_section{
  float: right;
}
</style>
