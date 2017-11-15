<template src="./applicantTable.html">
  
</template>

<script>
import applicantTableItem from "@/components/applicants_table/applicantTableItem/applicantTableItem"
import FadeLoader from "../../../../node_modules/vue-spinner/src/FadeLoader.vue"
import Pagination from "@/components/pagination/pagination"
import {mapGetters, mapActions} from "vuex"

export default {
  name:"applicantTable",
  mounted: function(){ return this.getApplicants()},
  data () {
    return {
      loading: true,
      getAppParams:{offset:0,limit:10,state:"kaduna"}
    }
  },
  computed:{
    ...mapGetters(["applicants"]),
  },
  methods:{
    ...mapActions(["getApplicants", "SET_SEARCH_PARAMS"]),

    next () {
      let newAppParams = {offset:0,limit:10,state:"kaduna"}
      newAppParams.offset = this.getAppParams.offset + 10
      this.getAppParams = newAppParams
      this.SET_SEARCH_PARAMS(newAppParams)

      return this.getApplicants()
    },
    
    prev () {
      let newAppParams = {offset:0,limit:10,state:"kaduna"}
      newAppParams.offset = this.getAppParams.offset - 10
      this.getAppParams = newAppParams
      this.SET_SEARCH_PARAMS(newAppParams)

      return this.getApplicants()
    }
  },
  components:{applicantTableItem, FadeLoader, Pagination}
}
</script>
