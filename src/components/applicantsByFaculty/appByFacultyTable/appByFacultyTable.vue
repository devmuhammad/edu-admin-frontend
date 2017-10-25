<template src="./appByFacultyTable.html">
  
</template>

<script>
import appByFacultyItem from "../appByFacultyItem/appByFacultyItem"
import dashTab from "@/components/tabs/dashboardTab/dashTab"
import {mapActions, mapGetters} from "vuex"

export default {
  name:"appByFacultyTable",
  mounted: function() { return this.getAppByFclty_State() },
  methods:{
    ...mapActions([
      'getAppByFclty_State'
    ])
  },
  computed:{
    ...mapGetters([
        "applicantsbystate"
    ])
  },
  components:{dashTab,appByFacultyItem}
}
</script>
