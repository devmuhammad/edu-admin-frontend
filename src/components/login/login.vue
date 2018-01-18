<template src ="./login.html">

</template>

<script>
import { mapState, mapGetters, mapActions, mapMutations } from "vuex";
import api from "../../api/Login"
export default {
  name: "login",
  data() {
    return {
      isLoading: false,
      user: { userid: "", password: "" },
      error: ""
    };
  },
  methods: {
    ...mapActions([ "SET_LOGIN_STATUS", "SET_ERR_MSG"]),

    async login() {
      this.getStatus;

      if (this.user.userid == "" || this.user.password == "") {
        this.isLoading = false;
      } else {
        this.isLoading = true;

        api.LOGIN(this.user)
        .then(res => {
          if (res.respcode == "001") {
            this.SET_ERR_MSG(res.respmessage);
            this.error = res.respmessage
            this.SET_LOGIN_STATUS({'status':false,'userInfo':null});
            this.isLoading=false;
          } else if (res.loginstatus == 0) {
            this.SET_LOGIN_STATUS({'status':true,"userInfo":res});
            return true;
          }
        })
        .catch(err => {
          this.SET_ERR_MSG(err.message);
          this.error = err.message
          this.isLoading =false;
        });

      }
    }
    
  },
  computed: {
    ...mapGetters(["login_status", "loginErr"]),
    getStatus() {
      return this.login_status == 0
        ? (this.isLoading = true)
        : (this.isLoading = false);
    }
  },
  components: {}
};
</script>
