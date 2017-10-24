<template src="./adminPanel.html">
  
</template>

<script>
import adminPanelBlock from "./adminPanelBlock"
import panelBlocks from "./panelBlocks"

export default {
  name:"adminPanel",
  mounted: function () { return this.setBlockActive() },
  data () {
    return {
      'panelBlocks' : panelBlocks.panelBlocks,
      'unset': false
    }
  },
  methods: {
    setBlockActive () {
      let newBlockState = panelBlocks.panelBlocks
      ,currentBlockState = this.panelBlocks
      ,pname = window.location.pathname.split("/",3)
      ,currentRoute = "/"+pname[2]
      console.log(currentRoute)
      switch(currentRoute)
      {
        case '/user_management':
          newBlockState[3].activity = true
          this.panelBlocks = newBlockState 
          break;
        case '/exam_center_upload':
          newBlockState[0].activity = true
          this.panelBlocks = newBlockState
          break;
        case '/exam_center_upload':
          newBlockState[2].activity = true
          this.panelBlocks = newBlockState
          break;
        case '/jamb_score_upload':
          newBlockState[1].activity = true
          this.panelBlocks = newBlockState
          break;
        case '/checkPayment_status':
          newBlockState[4].activity = true
          this.panelBlocks = newBlockState
          break;
        case '/change_password':
          newBlockState[5].activity = true
          this.panelBlocks = newBlockState
          console.log(newBlockState)
          break;  
      }

    }
  },
  components:{adminPanelBlock}
}
</script>
