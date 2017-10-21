<template>
  <div class="keyboards">
      xixix
        <!-- <div v-for="item in items" :key="item.id" :id='item.id' v-bind:class={highlight:item.highlight} class="keyboard"></div> -->
      </div>
</template>
<script>

export default {
  data(){
    return {
       items:[
           {'id':'A','highlight':false},{'id':'B','highlight':false},{'id':'C','highlight':false},
           {'id':'D','highlight':false},{'id':'E','highlight':false},{'id':'F','highlight':false},
           {'id':'G','highlight':false},{'id':'H','highlight':false},{'id':'I','highlight':false},
           {'id':'J','highlight':false},{'id':'K','highlight':false},{'id':'M','highlight':false},
           {'id':'N','highlight':false},{'id':'O','highlight':false},{'id':'P','highlight':false},
           {'id':'Q','highlight':false},{'id':'R','highlight':false},{'id':'S','highlight':false},] 
    }
    
  },
//   props:['items'],
  components: {
    
  },
  methods: {
    
  }
}
</script>

<style lang="scss">
@import "../utility.scss";
.highlight {
    color: #324233;
}
</style>

