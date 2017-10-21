<template>
  <div class="wrap">
      <search class="search_box margin">
      </search>
      
  </div>
</template>
<script>
import search from './search.vue'
export default {
  data(){
    return {
      "id" : "" 
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
@import "../utility.scss"

</style>

