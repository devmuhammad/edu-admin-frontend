<template src="./appByFacultyTable.html">
  
</template>

<script>
import appByFacultyItem from "../appByFacultyItem/appByFacultyItem"
import dashTab from "@/components/tabs/dashboardTab/dashTab"
export default {
  name:"appByFacultyTable",
  data () {
    return {
      response:[
        {
          "name":"Faculty of Art and social science",
          'female':777,
          'male':'11,567',
          'grand_total':'12,344'
        },
        {
          "name":"Accounting",
          'female':162,
          'male':1494,
          'grand_total':1656
        },
        {
          "name":"Economics",
          'female':201,
          'male':2619,
          'grand_total':2820
        },
        {
          "name":"Geography",
          'female':37,
          'male':1913,
          'grand_total':1950
        },
        {
          "name":"Political Science",
          'female':208,
          'male':3374,
          'grand_total':3582
        },
        {
          "name":"Psychology",
          'female':146,
          'male':1843,
          'grand_total':1989
        },
        {
          "name":"French",
          'female':4,
          'male':11,
          'grand_total':15
        },
        {
          "name":"History and war studies",
          'female':19,
          'male':313,
          'grand_total':332
        }
      ]
    }
  },
  components:{dashTab,appByFacultyItem}
}
</script>
