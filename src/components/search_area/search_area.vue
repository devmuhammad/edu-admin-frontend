<template src="./search_area.html">
  
</template>

<script>
import {matState, mapActions} from "vuex"

export default {
  name:"search_area",
  data () {
    return {
      svalue:"",
      sfield:"mobileNo1",
      course:"computer science",
      state:"Abia"
    }
  },
  methods:{
    ...mapActions(["getApplicants","SET_SEARCH_PARAMS"]),
    search(){
      let sParams = {
        offset:0,
        limit:10,
        state:this.state
      }

      this.SET_SEARCH_PARAMS(sParams)
      return this.getApplicants()
    }
  }
}
</script>
