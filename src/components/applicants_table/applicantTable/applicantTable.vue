<template src="./applicantTable.html">
  
</template>

<script>
import applicantTableItem from "@/components/applicants_table/applicantTableItem/applicantTableItem"
import FadeLoader from "../../../../node_modules/vue-spinner/src/FadeLoader.vue"
import Pagination from "@/components/pagination/pagination"
import {mapGetters, mapActions} from "vuex"

export default {
  name:"applicantTable",
  mounted: function(){ return this.getApplicants(this.getAppParams)},
  data () {
    return {
      loading: true,
      getAppParams:{offset:0,limit:10}
    }
  },
  computed:{
    ...mapGetters(["applicants"]),
  },
  methods:{
    ...mapActions(["getApplicants"]),

    next () {
      let newAppParams = {offset:0,limit:10}
      newAppParams.offset = this.getAppParams.offset + 10
      this.getAppParams = newAppParams

      return this.getApplicants(this.getAppParams)
    },
    
    prev () {
      let newAppParams = {offset:0,limit:10}
      newAppParams.offset = this.getAppParams.offset - 10
      this.getAppParams = newAppParams

      return this.getApplicants(this.getAppParams)
    }
  },
  components:{applicantTableItem, FadeLoader, Pagination}
}
</script>
