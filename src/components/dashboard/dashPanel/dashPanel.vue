<template src="./dashPanel.html">
  
</template>

<script>
import dashPanelBlock from "./dashPanelBlock"
import panelBlocks from "./panelBlocks"

export default {
  name:"dashPanel",
  data () {
    return {
      panelBlocks: panelBlocks.panelBlocks
    }
  },
  components:{dashPanelBlock}
}
</script>
