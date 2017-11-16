<template src ="./login.html">

</template>

<script>
import FadeLoader from "../../../node_modules/vue-spinner/src/FadeLoader.vue"
import {mapGetters, mapActions} from "vuex"


export default {
    name: "login",
    data() {
        return {
            loading:true,
            user: {userid: "",  password: ""}
        }
    },
    computed:{
    ...mapGetters({ 
      response_status: "create_loginstatus"
    }),
    },
    methods: {
        ...mapActions([
      "userlogin"
    ]),

        login() {return this.userlogin(this.user)}



    },
    components: {FadeLoader}

}
</script>
