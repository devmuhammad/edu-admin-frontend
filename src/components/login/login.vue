<template src ="./login.html">

</template>

<script>
import {mapState,mapGetters,mapActions} from "vuex"

export default {
  name: "login",
  data() {
    return {
      isLoading: false,
      user:{ userId:"", pass:"" },
      error:""
    };
  },
  methods: {
    ...mapActions(["userLogin"]),
    login() {
      this.getStatus
      if(this.user.userId == "" || this.user.pass == ""){
        this.error = "You can't submit an empty form!";
        this.isLoading = false;
      }else{
        return this.userLogin(this.user);
      }
    }
  },
  computed:{
    ...mapGetters(["login_status"]),
    getStatus(){
      return (this.login_status==0) 
      ? this.isLoading = true
      : this.isLoading = false;
    }
  },
  components: {}
};
</script>
