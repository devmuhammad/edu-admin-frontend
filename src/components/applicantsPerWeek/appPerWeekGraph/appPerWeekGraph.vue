<template src='./appPerWeekGraph.html'>
  
</template>

<script>
import dashTab from "@/components/tabs/dashboardTab/dashTab"
import { mapGetters, mapActions } from "vuex"
import LineChart from "./linechart_ext/lineChart"
import FadeLoader from '../../../../node_modules/vue-spinner/src/FadeLoader.vue'

export default {
  name:'appPerWeekGraph',
  mounted: function () {
    return (this.isData === true)
    ? this.loading = false
    : this.getAppPerWeek()
  },
  data () {
    return { loading:true }
  },
  computed:{
    isData() { return this.chartData.length > 0 && this.chartLabels.length > 0},
    ...mapGetters({
      options:'linechart_options',
      chartLabels: 'linechartLabels',
      chartData: 'linechartData'
    })
  },
  methods: { ...mapActions(["getAppPerWeek"]) },
  components:{dashTab, LineChart, FadeLoader}
}
</script>
