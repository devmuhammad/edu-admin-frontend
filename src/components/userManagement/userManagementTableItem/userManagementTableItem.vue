<template src="./userManagementTableItem.html">
  
</template>

<script>
export default {
  name:"userManagementTableItem",
  props:[
    'fullname',
    'useremail',
    'userphone',
    'datecreated',
    'lastlogin', 
    'checkbox', 
    'userid',
    'isSelected',
    
  ],
}
</script>