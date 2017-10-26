<template src="./appByFacultyItem.html">
  
</template>

<script>
export default {
  name:'appByFacultyItem',
  props:['states'],
  data(){
    return {
      showDepts: false
    }
  },
  methods:{
    toggleDept(){ return this.showDepts = !this.showDepts}
  }
}
</script>

