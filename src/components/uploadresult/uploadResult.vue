<template src="./uploadResult.html">

</template>

<script>
  import FileUpload from 'vue-simple-upload/dist/FileUpload'
  export default {
    name:"uploadResult",
    data () {
      return {
        uploadVisible:true,
       fileVisible:false,
        validateVisible: false,
        exportVisible: false,
        dataVisible:false,
        messages:''

      }
    },
    components: {
      'fileupload': FileUpload
    },
    computed:{
      validResults (){
        return this.$store.getters.scoreResults
      }
    },
    methods: {
      validateScore (){
       this.$store.dispatch('createScoreResults')
        this.uploadVisible=false
        this.exportVisible =true
        this.validateVisible =false
        this.dataVisible=true
        this.messages='Data Validation Completed'
      },
      exportScore (){
        this.$store.dispatch('exportScoreResult')
        this.uploadVisible=true
        this.exportVisible =false
        this.validateVisible =false
        this.fileVisible =false
        this.dataVisible=true
        this.messages='Data Succesfully Exported'
      },
      chooseFile (){
this.uploadVisible=false
 this.exportVisible =false
 this.validateVisible =false
this.fileVisible =true
        this.dataVisible =false
      },
      startUpload(e) {
        // file upload start event
      this.style ='loading'
        this.disable =true
        console.log("Start Uploading: "+e.message);
      },
      finishUpload(e) {
        this.uploadVisible=false
        this.exportVisible =false
        this.validateVisible =true
        this.dataVisible=true
        this.messages='Data Succesfully Imported'
      },
      progress(e) {
        // file upload progress
        // returns false if progress is not computable
        console.log(e);
      }

    }
  }
</script>

