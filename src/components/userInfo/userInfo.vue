<template src="./userInfo.html">
  
</template>

<script>
export default {
  name:"userInfo",
  data () {
    return {
      currentDate: new Date().toDateString()
    }
  }
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
