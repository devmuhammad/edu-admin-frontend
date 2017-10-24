import api from "../api/rootAPI"
/** ROOT MUTATIONS */
export const getStates =  (state) => {
  return api.getStates()
  .then((res) => { state.states = res })
  .catch((err) => { state.errors.push(err) })
}

