<template src="./addCenter.html">
  
</template>

<script>
import {mapGetters, mapActions} from "vuex"
import FadeLoader from "../../../../node_modules/vue-spinner/src/FadeLoader.vue"

export default {
  name:"addCenter",
  props:['isActive','closeModal'],
  mounted: function () { return this.getStates() },
  data () {
    return {
      examcenter: {capacity: 0, stateid: 4, description: '' },
      loading:true
    }
  },
  computed:{
    ...mapGetters({ 
      response_status:"create_status"
    })
  },
  methods: {
    ...mapActions([ "getStates","createNewCenter" ]),

    createNew(){ 
      return this.createNewCenter(this.examcenter)  
    },

    clear(){
      return this.$store.commit("clearStatusLog")
    }
  },
  components:{FadeLoader}
}
</script>

