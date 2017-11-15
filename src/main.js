// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from "./store"
import VueChartJs from 'vue-chartjs'
import VeeValidate from 'vee-validate'
import DataLabel from 'chartjs-plugin-datalabels'

Vue.config.productionTip = false
Vue.use(VueChartJs)
Vue.use(VeeValidate)
Vue.use(DataLabel)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App }
})
