<template src="./changePassword.html">
  
</template>

<script>
import FadeLoader from "../../../node_modules/vue-spinner/src/FadeLoader.vue"
import {mapGetters, mapActions} from "vuex"


export default {
  name:"changePassword",
  props:['isActive','closeModal'],
  //mounted: function () {return this.changePassword()},

  data () {
    return {
      user: { userid:'', oldpassword:"",newpassword:""},
    loading:true,
    
    }
   
  },
  computed:{
    ...mapGetters({ 
      response_status: "create_passwordstatus"
    }),
    
  }, 
  
  methods: {
    ...mapActions([
      "changeuserpassword"
    ]),

    changePassword(){ return this.changeuserpassword(this.user)},

    clear(){
      return this.$store.commit("clearPasswordStatusLog")
    },
  },

  components:{FadeLoader}

}
</script>
