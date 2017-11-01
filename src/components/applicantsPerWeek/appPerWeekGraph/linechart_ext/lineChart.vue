<script>
import { Line } from 'vue-chartjs'

export default {
  name:"LineChart",
  extends:Line,
  props:['chartData', 'chartLabels', 'options'],
  mounted: function () { return this.__renderChart() },
  methods: {
    __renderChart () {
      return this.renderChart({ labels: this.chartLabels,
      datasets: [
        {
          'label': 'Applicants',
          'hoverBackgroundColor': 'grey',
          'borderColor': '#249EBF',
          'pointBackgroundColor': 'white',
          'borderWidth': 1,
          'pointBorderColor': '#249EBF',
          'backgroundColor': '#00923f',
          'data': this.chartData
        }
      ]
      }, this.options)
    }   
  },
}
</script>
