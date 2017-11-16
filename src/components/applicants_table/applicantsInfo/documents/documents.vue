<template src="./documents.html">
  
</template>

<script>
export default {
  name:"documents",
  props:['appDocs'],
  data () {
    return {
      isDocSelected:false,
      selectedDoc:{
        src:"",
        name:""
      }
    }
  },
  methods:{
    docSelected(src,name){
      this.selectedDoc = {
        src:"https://s3.amazonaws.com/comsoftltd.net/nda69thregular/otherdoc/"+src,
        name:name
      }

      this.isDocSelected = true
    },
    deselectDoc(){
      this.isDocSelected = false
      this.selectedDoc = {
        src:"",
        name:""
      }
    }
  }
}
</script>
