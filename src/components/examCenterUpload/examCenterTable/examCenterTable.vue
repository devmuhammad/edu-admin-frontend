<template src="./examCenterTable.html">
  
</template>

<script>
import examCenterTableItem from "../examCenterTableItem/examCenterTableItem";
import addCenter from "../addCenterForm/addCenter"
import {mapActions, mapState, mapGetters} from "vuex"
import FadeLoader from "../../../../node_modules/vue-spinner/src/FadeLoader.vue"

export default {
  name: "examCenterTable",
  created: async function () { await this.getExamCenters(0); return this.errorHandler },

  beforeMount: function () {return this.errorHandler},

  data () {
    return {
      openModal: false,
      loading : true,
      ec_checkboxes: [],
      checkedlist: []
    }   
  },

  computed:{
    ...mapGetters([
      'examcenters',
      'fetch_error'
    ]),
    selectAll: {
      get: function () {
        return this.examcenters ? this.ec_checkboxes.length == this.examcenters.length : false;
      },
      
      set: function (value) {
        let ec_checkboxes = [];

        if (value) 
        {
          this.examcenters.forEach( function (examcenter) {
              ec_checkboxes.push(examcenter.examcentreid); 
          });
        }
        this.ec_checkboxes = ec_checkboxes;
        console.log(ec_checkboxes)
      }
    },
    errorHandler() {
      for(let key in this.fetch_error) {
        if(this.fetch_error.hasOwnProperty(key))
          this.loading = false
          return false;
      }
      return true;
    }
  },
  
  methods:{
    setAddModalActive () { 
      this.getExamCenters(0);
      return this.openModal = !this.openModal 
    },

    isSelected (event) { 
      if(event.target.checked === true)
      {
        this.checkedlist.push(event.target.value)
        console.log(this.checkedlist)
      }else{
        const index = this.checkedlist.indexOf(event.target.value)
        return index > -1 ? this.checkedlist.splice(index, 1) : false
        console.log(this.checkedlist)
      }
    },

    deleteCenter () { return this.DeleteCenter(this.checkedlist[0])},

    ...mapActions([
      "getExamCenters",
      "DeleteCenter"
    ])
  },
  components:{examCenterTableItem, addCenter, FadeLoader}
}
</script>


