<template src ="./login.html">

</template>

<script>
import FadeLoader from "../../../node_modules/vue-spinner/src/FadeLoader.vue"


export default {
    name: "login",
    data() {
        return {
            loading:true,
            user: {userid: "",password: ""}
        }
    },
    methods: {

        login() {return this.userlogin(this.user)}



    },
    components: {FadeLoader}

}
</script>
