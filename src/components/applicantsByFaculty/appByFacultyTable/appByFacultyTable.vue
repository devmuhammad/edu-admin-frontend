<template src="./appByFacultyTable.html">
  
</template>

<script>
import appByFacultyItem from "../appByFacultyItem/appByFacultyItem"
import dashTab from "@/components/tabs/dashboardTab/dashTab"
import {mapActions, mapGetters} from "vuex"
import FadeLoader from '../../../../node_modules/vue-spinner/src/FadeLoader.vue'
import pagination from "@/components/pagination/pagination"

export default {
  name:"appByFacultyTable",
  mounted: function() { return this.getAppByFclty_State() },
  created: function () { return this.currentPage },
  data () {
    return {
      loading:true,
      page_num: 0,
      first: 1,
      second: 2,
      third: 3
    }
  },
  methods:{
    ...mapActions([
      'getAppByFclty_State'
    ]),
    nextPage() { 
      this.page_num++ 
      let currentPage = this.page_num+1;
      this.first = currentPage
      this.second = currentPage+1
      this.third = currentPage+2
      return true
    },
    prevPage() { 
      this.page_num-- 
      let currentPage = this.page_num+1;
      this.first = currentPage
      this.second = currentPage+1
      this.third = currentPage+2
      return true
    }
  },
  computed:{
    ...mapGetters({
        applicantsbystate:"applicantsbyfclty_state"
    }),
    appbystate () {
      let currentPage = new Array()
      currentPage.push(this.applicantsbystate[this.page_num])
      return currentPage
    },
    currentPage () {
      let currentPage = this.page_num+1;
      this.first = currentPage
      this.second = currentPage+1
      this.third = currentPage+2
    },
    activePage () {
      return this.page_num+1
    }
  },
  components:{dashTab, appByFacultyItem, FadeLoader, pagination}
}
</script>
