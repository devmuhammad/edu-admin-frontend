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
            
        appregistered: 0,
        appcompleted: 0,
        paid: 0
        },

        } 
    },
    methods: {
        getApplicationRegisterandFill(){
            const res = []
            HTTP.get(`register/`)
            .then(response => {
               let res = response.data
                // console.log(res)
            for (let i=0; i < res.length; i++)
            {
                let cursor = res[i] 
                if (cursor.description_one == "Paid"){
                    this.applicationstatus.paid = cursor.total
                }
                else if (cursor.description_one == "Filled"){
                    this.applicationstatus.appcompleted = cursor.total
                }
                else if (cursor.description_one == "Registered"){
                    this.applicationstatus.appregistered = cursor.total
                }
                
            }
        
            })
            
            .catch(e => {
              this.errors.push(e)
        
    })
        }
    }
}

</script>