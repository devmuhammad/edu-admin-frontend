<template src="./adminPanel.html">
  
</template>

<script>
import adminPanelBlock from "./adminPanelBlock"
import panelBlocks from "./panelBlocks"

export default {
  name:"adminPanel",
  data () {
    return {
      'panelBlocks' : panelBlocks.panelBlocks
    }
  },
  components:{adminPanelBlock}
}
</script>
