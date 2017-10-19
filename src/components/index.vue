<template src="./index.html"> </template>

<script>
import Dashboard from "@/components/dashboard/dashboard";
import mainTab from "@/components/tabs/mainTab"
export default {
  name: 'index',
  data () {
    return {
      msg: ''
    }
  },
  components:{Dashboard,mainTab}
}
</script>


<style scoped>
</style>
