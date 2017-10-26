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
      'path': window.location.pathname
    }
  },
  methods: {
    setBlockActive () {
      let newBlockState = panelBlocks.panelBlocks
          ,pname = window.location.pathname.split("/",3)
          ,currentRoute = "/"+pname[2]

      const clear_state = (pntr) => {
        for(let i=0;i<newBlockState.length;i++){
          newBlockState[i].activity = false
        }

        newBlockState[pntr].activity = true
        this.panelBlocks = newBlockState
      }

      switch(currentRoute)
      {
        case '/user_management':
          clear_state(3)
          break;
        case '/exam_center_upload':
          clear_state(0)
          break;
        case '/exam_score_upload':
          clear_state(2)
          break;
        case '/jamb_score_upload':
          clear_state(1)
          break;
        case '/checkPayment_status':
          clear_state(4)
          break;
        case '/change_password':
          clear_state(5)
          break;  
      }

    }
  },
  components:{adminPanelBlock}
}
</script>
