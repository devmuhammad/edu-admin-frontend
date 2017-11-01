<template src="./usersampleTable.html">
  
</template>

<script>
import usersampleTableItem from "@/components/usermanagementsample/usersampleTableItem/usersampleTableItem"
import addUser from "../addUserForm/addUser"
import updateUser from "../updateUserForm/updateUser"
export default {
  name:"usersampleTable",
  data () {
    return {
      users: [1,2,3,4,5,6,7,8,9,10],
      openModal: false,
    }
  },
  methods:{
    setAddModalActive () { return this.openModal = !this.openModal },
    setUpdateModalActive () { return this.openModal = !this.openModal },

    deleteUser () { return this.DeleteUser(this.checkedlist[0])},
  },
  components:{usersampleTableItem, addUser, updateUser}
}
</script>
