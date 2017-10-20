<template src="./examCenterTable.html">
  
</template>

<script>
import examCenterTableItem from "../examCenterTableItem/examCenterTableItem";
import { HTTP } from '../../../resources/resources'


export default {
  name: "examCenterTable",
  mounted: function () { return this.GET_EXAMCENTERS(0) },
  data () {
    return {
      examcenters: [],
      errors: [],
     responseMsg: {
        responsestatus: '',
        respmessage: '',
        respcode: ''
      },
    }
    
  },
  methods:{

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
   
  },

  components:{examCenterTableItem}
}
</script>

