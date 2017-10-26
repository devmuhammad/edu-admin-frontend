<template src='./appByStateGraph.html'>
  
</template>

<script>
import dashTab from "@/components/tabs/dashboardTab/dashTab"
import { mapGetters, mapActions } from "vuex"
import BarChart from "./barchart_ext/barChart"
import FadeLoader from '../../../../node_modules/vue-spinner/src/FadeLoader.vue'

export default {
  name:'appByStateGraph',
  mounted: function () {
    return (this.isData === true)
    ? this.loading = false
    : this.getAppByState()
  },
  data () {
    return { loading:true }
  },
  computed:{
    isData() { return this.chartData.length > 0 && this.chartLabels.length > 0},
    ...mapGetters({
      options:'chart_options',
      chartLabels: 'chartLabels',
      chartData: 'chartData'
    })
  },
  methods: { ...mapActions(["getAppByState"]) },
  components:{dashTab, BarChart, FadeLoader}
}
</script>
