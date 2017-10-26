<template src="./appByFacultyTable.html">
  
</template>

<script>
import appByFacultyItem from "../appByFacultyItem/appByFacultyItem"
import dashTab from "@/components/tabs/dashboardTab/dashTab"
import {mapActions, mapGetters} from "vuex"
import FadeLoader from '../../../../node_modules/vue-spinner/src/FadeLoader.vue'

export default {
  name:"appByFacultyTable",
  mounted: function() { return this.getAppByFclty_State() },
  data () {
    return {
      loading:true
    }
  },
  methods:{
    ...mapActions([
      'getAppByFclty_State'
    ])
  },
  computed:{
    ...mapGetters({
        applicantsbystate:"applicantsbyfclty_state"
    })
  },
  components:{dashTab, appByFacultyItem, FadeLoader}
}
</script>
