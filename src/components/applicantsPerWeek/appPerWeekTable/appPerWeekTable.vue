<template src='./appPerWeekTable.html'>
  
</template>

<script>
import appPerWeekTableItem from "../appPerWeekTableItem/appPerWeekTableItem"
import dashTab from "@/components/tabs/dashboardTab/dashTab"
import {mapGetters,mapActions } from 'vuex'
import FadeLoader from '../../../../node_modules/vue-spinner/src/FadeLoader.vue'


export default {
    name:'appPerWeekTable',
    mounted: function () { return this.getData() },
  data () {
    return {
      loading: true
    }
  },
  methods:{
    ...mapActions({
      getData:'getAppPerWeek'
    })
  },
  computed:{
    ...mapGetters([
      "applicantsperweek"
    ])
  },
    components:{appPerWeekTableItem,dashTab, FadeLoader}
}
</script>
