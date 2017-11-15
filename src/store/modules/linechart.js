import api from "../../api/DashboardAPI"

let state = {
  applicantsperweek: [],
  appperweek_err: {},
  linechart_options:{
    scales: {
      yAxes: [{
        scaleLabel: { 'display': true, 'labelString': 'Total' },
        ticks: { 'beginAtZero': false },
        gridLines: { 'display': true }
      }],
      xAxes: [{
        scaleLabel: { 'display': true, 'labelString': 'Weeks' },
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
  
  linechart_options: state => state.linechart_options,
  linechartLabels: state => {
    try {
      console.log(state.applicantsperweek)
      return state.applicantsperweek.map((state) => {
        return state.weekid
      })
    } catch (error) {
      console.log(error)
    }
    
  },
  linechartData: state => {
    try {
      return state.applicantsperweek.map((state) => {
        return state.total
      })
    } catch (error) {
      console.log(error)
    }
    
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