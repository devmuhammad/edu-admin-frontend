<template src="./userManagementTableItem.html">
  
</template>

<script>
export default {
  name:"userManagementTableItem",
  props:[
    'fullname',
    'emailaddress',
    'phonenumber',
    'datecreated',
    'lastlogin', 
    'checkbox', 
    'userid',
    'isSelected',
    
  ],
}
</script>