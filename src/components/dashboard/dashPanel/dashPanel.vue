<template src="./dashPanel.html">
  
</template>

<script>
import dashPanelBlock from "./dashPanelBlock"
import panelBlocks from "./panelBlocks"

export default {
  name:"dashPanel",
  mounted: function () { return this.setBlockActive() },
  data () {
    return {
      panelBlocks: panelBlocks.panelBlocks
    }
  },
  methods: {
    setBlockActive () {
      let newBlockState = panelBlocks.panelBlocks
          ,pname = window.location.pathname.split("/",3)
          ,currentRoute = "/"+pname[2]
console.log(currentRoute)
      const clear_state = (pntr) => {
        for(let i=0;i<newBlockState.length;i++){
          newBlockState[i].activity = false
        }

        newBlockState[pntr].activity = true
        this.panelBlocks = newBlockState
      }

      switch(currentRoute)
      {
        case "/undefined":
          clear_state(0)
          break;
        case '/applicantsperweek':
          clear_state(1)
          break;
        case '/tableofapplicantsbystate':
          clear_state(2)
          break;  
      }

    }
  },
  components:{dashPanelBlock}
}
</script>
