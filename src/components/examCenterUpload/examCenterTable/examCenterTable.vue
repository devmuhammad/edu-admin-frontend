<template src="./examCenterTable.html">
  
</template>

<script>
import examCenterTableItem from "../examCenterTableItem/examCenterTableItem";
import addCenter from "../addCenterForm/addCenter"

export default {
  name: "examCenterTable",
  mounted: function () { return this.fetchCenters() },
  data () {
    return {
      openModal: false,
      centers:[
        {
          'id' :1,
          'name':"Government Day Secondary School, Opposite HQ 23 Armd Bde, Yola",
          'capacity':600,
          'numberOfApplicants': 18
        },
        {
          'id' :2,
          'name':"Community Secondary School, Aka Offot, Uyo",
          'capacity':4000,
          'numberOfApplicants': 17
        },
        {
          'id' :3,
          'name':"Government Day Secondary School, Shadawanka Cantonment, Bauchi",
          'capacity':2000,
          'numberOfApplicants': 47
        },
        {
          'id' :4,
          'name':"Command Secondary School, Makurdi",
          'capacity':500,
          'numberOfApplicants': 21
        },
        {
          'id' :5,
          'name':"Command Secondary School, Maimalari Cantonment, Maiduguri",
          'capacity':800,
          'numberOfApplicants': 4
        }
        
      ]
    }
  },
  methods:{
    deleteCenter (id) {
      return true;
    },
    fetchCenters () {
      return true;
    },
    setAddModalActive () { return this.openModal = !this.openModal }
  },
  components:{examCenterTableItem, addCenter}
}
</script>

