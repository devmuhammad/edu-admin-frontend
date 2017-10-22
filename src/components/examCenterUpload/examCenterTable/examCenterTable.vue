<template src="./examCenterTable.html">
  
</template>

<script>
import examCenterTableItem from "../examCenterTableItem/examCenterTableItem";
import addCenter from "../addCenterForm/addCenter"
import {mapActions, mapState} from "vuex"

export default {
  name: "examCenterTable",
  mounted: function () { return this.getExamCenters(0) },
  data () {
    return {
      openModal: false,
      ...mapState({
        examcenters:'examcenters'
      })
    }   
  },
  methods:{
    setAddModalActive () { return this.openModal = !this.openModal },
    ...mapActions([
      "getExamCenters"
    ])
  },
  components:{examCenterTableItem, addCenter}
}
</script>

