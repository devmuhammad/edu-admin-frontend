<template src="./examCenterTableItem.html">
  
</template>

<script>
export default {
  name:"examCenterTableItem",
  props:[
    'centerName',
    'centerCapacity',
    'applicantsNum',
    'serialNum', 
    'cbox', 
    'cid',
    'isSelected'
  ],
  computed: {
    checkbox: { 
      get: function () {this.cbox} ,
      set: function () { return this.cbox }
    } 
  }
}
</script>

