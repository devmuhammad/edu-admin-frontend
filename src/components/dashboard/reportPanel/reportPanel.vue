<template src="./reportPanel.html">
  
</template>
<script src="https://w2.countingdownto.com/1963114.js"></script>
<script>

import axios from 'axios'
import { HTTP } from '../../../resources/resources'

export default {
    name: "reportPanel",
    mounted: function () { return this.getApplicationRegisterandFill() },
    data() {
        return {
        applicationstatus :{
            id: 0,
        appregistered: 0,
        appcompleted: 0,
        paid: 0
        },

        } 
    },
    methods: {
        getApplicationRegisterandFill(){
            HTTP.get(`register/`, this.applicationstatus)
            .then(response => {
                this.applicationstatus = response.data
                //  this.appregistered = response.data.appregistered
                //  this.appcompleted = response.data.appcompleted
                //  this.paid = response.data.paid

            })
            
            .catch(e => {
              this.errors.push(e)
        
    })
        }
    }
}

</script>