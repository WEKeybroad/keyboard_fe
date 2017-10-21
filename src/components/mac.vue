<template>
  <div class="wrap margin">
    <div class="left inline_block">
      <search class="search_box margin">
      </search>
      </div>
      <div class="right inline_block" >
      </div>
      
  </div>
</template>
<script>
import search from './search.vue'
export default {
  data(){
    return {
    }
  },
  components: {
    "search": search
  },
  methods: {
    
  }
}
</script>

<style lang="scss">
@import "../utility.scss";
.search_box {
  width: 100%;
  height: 45px;
  border: 2px solid #8eadf9;
}
</style>

