<template src="./examCenterTable.html">
  
</template>

<script>
import examCenterTableItem from "../examCenterTableItem/examCenterTableItem";
import { HTTP } from '../../../resources/resources'

import addCenter from "../addCenterForm/addCenter"

export default {
  name: "examCenterTable",
  mounted: function () { return this.GET_EXAMCENTERS(0) },
  data () {
    return {
      openModal: false,
      examcenters: [],
      examcenter: {},
      errors: [],
      responseMsg: {
        responsestatus: '',
        respmessage: '',
        respcode: ''
      },
    }
    
  },
  methods:{

    CREATE_EXAMCENTER() {
      HTTP.post(`add/examcenter/`, this.examcenter)
        .then(response => {
          this.responseMsg = response.data
          this.GET_EXAMCENTERS(0)

        })
        .catch(e => {
          this.errors.push(e)
        })
    },

    UPDATE_EXAMCENTER() {
      HTTP.PUT(`update/examcenter/`, this.examcenter)
        .then(response => {
          this.responseMsg = response.data
          this.GET_EXAMCENTERS(0)

        })
        .catch(e => {
          this.errors.push(e)
        })
    },

    DELETE_EXAMCENTER (id) {
      HTTP.delete(`delete/examcenter/` + id)
        .then(response => {
          this.responseMsg = response.data
          this.GET_EXAMCENTERS(0)

        })
        .catch(e => {
          this.errors.push(e)
        })
    },
    
    GET_EXAMCENTER(id) {
      HTTP.delete(`examcenter/` + id)
        .then(response => {
          this.examcenter = response.data
        })
        .catch(e => {
          this.errors.push(e)
        })
    },

    GET_EXAMCENTERS (stateid) {
      HTTP.get(`examcenter?=` + stateid)
        .then(response => {
          this.examcenters = []
          this.examcenters = response.data
           
        })
        .catch(e => {
          this.errors.push(e)
        })

      return true;
    },
    setAddModalActive () { return this.openModal = !this.openModal }
  },
  components:{examCenterTableItem, addCenter}
}
</script>

