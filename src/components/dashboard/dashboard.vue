<template src="./dashboard.html">
  
</template>

<script>
import dashPanel from "./dashPanel/dashPanel"
import appByFacultyTable from "../applicantsByFaculty/appByFacultyTable/appByFacultyTable"

export default {
  name:"Dashboard",
  data () {
    return {
      currentRoute: window.location.pathname
    }
  },
  components:{dashPanel, appByFacultyTable}
}
</script>
