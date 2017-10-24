<template src="./appByStateTable.html"> 
  
</template>

<script>
import appByStateTableItem from "../appByStateTableItem/appByStateTableItem"
import dashTab from "@/components/tabs/dashboardTab/dashTab"
import {mapGetters,mapActions } from 'vuex'
import FadeLoader from '../../../../node_modules/vue-spinner/src/FadeLoader.vue'

export default {
  name:'appByStateTable',
  mounted: function () { return this.getData() },
  data () {
    return {
      loading: true
    }
  },
  methods:{
    ...mapActions({
      getData:'getAppByState'
    })
  },
  computed:{
    ...mapGetters([
      "applicantsbystate"
    ])
  },
  components:{appByStateTableItem, dashTab, FadeLoader}
}
</script>
