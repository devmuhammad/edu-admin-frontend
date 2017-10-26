import api from "../../api/DashboardAPI"

let state = {
  applicantsbystate: [],
  applicantsbyfclty_state: [],
  appbyfclty_state_err: {},
  appbystate_err: {},
  chart_options:{
    scales: {
      yAxes: [{
        scaleLabel: { 'display': true, 'labelString': 'Total' },
        ticks: { 'beginAtZero': false },
        gridLines: { 'display': true }
      }],
      xAxes: [{
        scaleLabel: { 'display': true, 'labelString': 'States' },
        barPercentage: 1.2,
        categorySpacing: 0,
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
  applicantsbystate: state => state.applicantsbystate,
  applicantsbyfclty_state: state => state.applicantsbyfclty_state,
  chart_options: state => state.chart_options,
  chartLabels: state => {
    return state.applicantsbystate.map((applicants) => {
      return applicants.description_one
    })
  },
  chartData: state => {
    return state.applicantsbystate.map((applicants) => {
      return applicants.total
    })
  }
}

/** MUTATIONS HERE */
let mutations = {
  getAppByState: (state) => {
    api.GET_APP_BY_STATE()
    .then((res) => { state.applicantsbystate = res })
    .catch((err) => { state.appbystate_err.error = err })
  },
  getAppByFclty_State: (state) => {
    api.APP_BY_FACULTY_STATE()
    .then((res) => { state.applicantsbyfclty_state = res })
    .catch((e) => { console.log(e); state.appbyfclty_state_err.error = e.message })
  }
}

const actions = {
  getAppByState: ({commit}) => commit('getAppByState'),
  getAppByFclty_State: ({commit}) => commit('getAppByFclty_State')
}

export default {
  state,
  getters,
  mutations,
  actions
}