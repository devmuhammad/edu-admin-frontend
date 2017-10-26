<template src="./dashboard.html">
  
</template>

<script>
import dashPanel from "./dashPanel/dashPanel"
import reportPanel from "./reportPanel/reportPanel"
import appByFacultyTable from "../applicantsByFaculty/appByFacultyTable/appByFacultyTable"

export default {
  name:"Dashboard",
  data () {
    return {
      currentRoute: window.location.pathname
    }
  },
  components:{dashPanel,reportPanel, appByFacultyTable}
}
</script>
