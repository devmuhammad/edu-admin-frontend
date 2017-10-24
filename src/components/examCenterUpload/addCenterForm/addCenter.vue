<template src="./addCenter.html">
  
</template>

<script>
import {mapState, mapActions} from "vuex"

export default {
  name:"addCenter",
  props:['isActive','closeModal'],
  mounted: function () { return this.getStates() },
  data () {
    return {
      examcenter: {capacity: 0, stateid: 4, description: '' }
    }
  },
  computed:{
    ...mapState([ "states"])
  },
  methods: {
    ...mapActions([
      "getStates",
      "createNewCenter"
    ]),
    createNew(){ return this.createNewCenter(this.examcenter) }
  }
}
</script>

