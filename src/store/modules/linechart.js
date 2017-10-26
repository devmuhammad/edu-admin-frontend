import api from "../../api/DashboardAPI"

let state = {
  applicantsperweek: [],
  appperweek_err: {},
  chart_options:{
    scales: {
      yAxes: [{
        scaleLabel: { 'display': true, 'labelString': 'Total' },
        ticks: { 'beginAtZero': false },
        gridLines: { 'display': true }
      }],
      xAxes: [{
        scaleLabel: { 'display': true, 'labelString': 'States' },
        ticks: { 'autoSkip': false },
        gridLines: {'display': false}
      }]
    },
    legend: { 'display': true},
    showAllTooltips: true,
    responsive: true,
    maintainAspectRatio: false
  }
}

/* GETTERS HERE */
let getters = {
  applicantsperweek: state => state.applicantsperweek,
  
  chart_options: state => state.chart_options,
  chartLabels: state => {
    return state.applicantsperweek.map((state) => {
      return state.weekid
    })
  },
  chartData: state => {
    return state.applicantsperweek.map((state) => {
      return state.total
    })
  }
}

/** MUTATIONS HERE */
let mutations = {
  getAppPerWeek: (state) => {
    api.GET_APP_PER_WEEK()
    .then((res) => { state.applicantsperweek = res })
    .catch((err) => { state.appperweek_err.error = err })
  },
  
}

const actions = {
  getAppPerWeek: ({commit}) => commit('getAppPerWeek'),
  
}

export default {
  state,
  getters,
  mutations,
  actions
}