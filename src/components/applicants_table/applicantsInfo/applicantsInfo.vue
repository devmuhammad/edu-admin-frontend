<template src="./applicantsInfo.html">
  
</template>

<script>
import infoTab from "@/components/tabs/applicantInfoTab/infoTab"
import personalInfo from "./personal_info/personal_info"
import qualifications from "./qualifications/qualifications"
import documents from "./documents/documents"

export default {
  name:"applicantsInfo",
  props:["isActive", "closeModal", "applicant"],
  mounted: function() { return this.setComponent() },
  data () {
    return {
      displayQualifications:'block',
      displayDocs:'none'
    }
  },
  watch:{
    '$route': 'setComponent'
  },
  methods:{
    setComponent(){
      if(this.$route.path === '/documents'){
        this.displayDocs = 'block'
        this.displayQualifications = 'none'
      }else if(this.$route.path === '/applications'){
        this.displayDocs = 'none'
        this.displayQualifications = 'block'
      }
    }
  },
  computed:{
    sortQualification(){
        let qualification = this.applicant.qualificationsList
        let fsiting = {examcenter: "",examnumber: "",examtype: "",year: "",subjects: []}
        let ssiting = {examcenter: "",examnumber: "",examtype: "",year: "",subjects: []}

        for(let i = 0;i < qualification.length;i++){
          let pointr = qualification[i]

          if(pointr.sitingtag === 1){
            fsiting.examcenter = pointr.examcentre
            fsiting.examnumber = pointr.examno
            fsiting.examtype = pointr.qualificationtype
            fsiting.year = pointr.yeartaken

            fsiting.subjects.push({
              subject: pointr.subjectid.subject,
              grade: pointr.grade
            })
          }else if(pointr.sitingtag === 2){
            ssiting.examcenter = pointr.examcentre
            ssiting.examnumber = pointr.examno
            ssiting.examtype = pointr.qualificationtype
            ssiting.year = pointr.yeartaken

            ssiting.subjects.push({
              subject: pointr.subjectid.subject,
              grade: pointr.grade
            })
          }
        }

        return {"fs":fsiting, "ss":ssiting}
    }
  },
  components:{infoTab,personalInfo,qualifications,documents}
}
</script>

<style lang="scss" scoped>
  $modal-content-width:1040px;
</style>

