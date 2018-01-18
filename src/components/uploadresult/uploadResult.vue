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
        finishVisible:false,
        messages:'',
        json_fields : {
          "score"      : "Number",
          "regNum"      : "String",
          "depSN"   : "String",
          "candName" : "String",
          "stateoforigin"    : "String",
          "lga"    : "String",
          "sex"    : "String",
          "age"    : "Number",
          "engScore"    : "Number",
          "subj2"    : "String",
          "subj2score"    : "Number",
          "subj3"    : "Number",
          "subj3score"    : "String",
          "subj4"    : "String",
          "subj4score"    : "Number",
          "totalscore"    : "Number",
          "firschoice"    : "String",
          "corsAbrev"    : "String",
          "corsid"    : "String",
          "facAbrev"    : "String",
          "telNo"    : "String",
          "status"    : "String",
          "exception"    : "String"
        },
json_data: [],
        json_meta: [
          [{
            "key": "charset",
            "value": "utf-8"
          }]
        ]

      }
    },
    components: {
      'fileupload': FileUpload,
    },
    computed:{
      validResults (){
        const results =this.$store.getters.scoreResults
        self =this.json_data
       results.forEach(function(item){
        self.push({
           score: item.score,
           regNum: item.regNum,
           depSN: item.depSN,
           candName: item.candName,
           stateoforigin: item.stateoforigin,
           lga:item.lga,
           sex: item.sex,
           age: item.age,
           engScore: item.engScore,
           subj2: item.subj2,
           subj2score: item.subj2score,
           subj3: item.subj3,
           subj3score: item.subj3score,
           subj4:item.subj4,
           subj4score: item.subj4score,
           totalscore:item.totalscore,
           firschoice: item.firschoice,
           corsAbrev:item.corsAbrev,
           corsid: item.corsid,
           facAbrev: item.facAbrev,
           telNo: item.telNo,
           status: item.status,
           exception: item.exception
         })
       })
        return self
      }
    },
    methods: {
      validateScore (){
       this.$store.dispatch('createScoreResults')
        this.uploadVisible=false
        this.exportVisible =true
        this.validateVisible =false
        this.dataVisible=true
        this.finishVisible=true
        this.messages='Data Validation Completed'
      },
      exportScore (){
        this.$store.dispatch('exportScoreResult')
        this.uploadVisible=true
        this.exportVisible =false
        this.validateVisible =false
        this.fileVisible =false
        this.dataVisible=true
        this.finishVisible=true
        this.messages='Data Succesfully Exported'
      },
      finishResult (){
        this.uploadVisible=true
        this.exportVisible =false
        this.validateVisible =false
        this.fileVisible =false
        this.dataVisible=false
        this.finishVisible=false
        this.messages=''
        this.json_date =[]
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
        this.dataVisible=false
        this.finishVisible=false
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

