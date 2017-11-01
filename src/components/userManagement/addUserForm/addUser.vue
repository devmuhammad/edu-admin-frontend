<template src="./addUser.html">
  
</template>

<script>
import {mapState, mapActions} from "vuex"

export default {
  name:"addUser",
  props:['isActive','closeModal'],
  mounted: function () { return this.getUser() },
  data () {
    return {
        user: {fullname: '', userslist: [], email: '' }
    }
  },
  computed:{
    ...mapState([ "users"])
    },

  methods: {
    ...mapActions([
      "getUser",
      "createNewUser"
    ]),
    createNew(){ return this.createNewUser(this.user) }
  }
}
</script>