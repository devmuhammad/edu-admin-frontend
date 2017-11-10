<template src="./updateUser.html">
  
</template>

<script>
import {mapState, mapActions} from "vuex"

export default {
  name:"updateUser",
  props:['isActive','closeModal'],
  mounted: function () { return this.getUsers() },
  data () {
   return {
        user: {name: '', password:'', confirmpassword:'', email: '', profiletype:'' },
        loading:true
    }
  },
  computed:{
    ...mapState([ "users"])
    },

  methods: {
    ...mapActions([
      "getUsers",
      "updateUser"
    ]),
    updateUser(){ return this.updateUser(this.user) }
  }
}
</script>