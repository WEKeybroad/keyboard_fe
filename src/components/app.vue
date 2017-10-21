<template>
    <div class="all">
         <div class="top-logo">

            </div>
        <div class="wrap margin">
           
            <div class="left inline_block">
                
                <div class="tab" >
                    <router-link to="/">
                        <a v-on:click="to_mac" v-bind:class="{tab_light: mac}">Mac</a>
                    </router-link>
<<<<<<< HEAD
                    丨
=======
                    <span> | </span>
>>>>>>> ee1c01024b510eefcf2665bf882744fa8bf3d557
                    <router-link to="/windows">
                        <a v-on:click="to_windows" v-bind:class="{tab_light: !mac}">Windows</a>
                    </router-link>
                </div>
                <div class="search_all">
                <div class="text_box">
<<<<<<< HEAD
                 <div class="chooseKind">
                    <select v-model="selected">
                        <option value="common">common</option>
                        <option value="ps">ps</option>
                        <option value="word">word</option>
                    </select>
                </div>
                    <input type="text" placeholder="快捷键" class="input_box" v-model="input">
                    <div class="icon_box" >
                        <svg viewBox="0 0 200 200" class="icon"  @click="send()" >
                                <use xmlns:xlink="http://www.w3.org/2000/svg" xlink:href="#search_icon"></use>
                        </svg>
                    </div>
                    <!-- <div class="search_icon"></div>  -->
                </div>
                <div v-if="warn_text" class="warn_text">
                    你找的快捷键不存在
                </div>
                <div class="descript_word" >
                      {{descript_word}}
=======
                    <div class="drag_list inline_block full_height vertical_align">
                        <select v-model="group" class="select full_height full_width">
                            <option value="common">通用</option>
                            <option value="indesign">Indesign</option>
                            <option value="ps">PhotoShop</option>
                        </select>
                    </div>
                    <input type="text" v-model.trim="input_word" placeholder="请输入你想搜索的快捷键" class="input_box inline_block full_height vertical_align">
                    <div v-on:click="search" class="icon_box inline_block full_height vertical_align">
                        <svg viewBox="0 0 200 200" class="icon">
                                <use xmlns:xlink="http://www.w3.org/2000/svg" xlink:href="#search_icon"></use>
                        </svg>
                    </div>
>>>>>>> ee1c01024b510eefcf2665bf882744fa8bf3d557
                </div>
                </div>
                
               
                
                <router-view> </router-view>
            </div>
        </div>
        <div class="right inline_block">
            <div class="list">
             <div class="list_title"> 常用快捷键</div>
             <div class="list_items">
             <div  v-for='(item,index) in list' :key="item" class="list_item" >{{++item.index}}.{{item.keys}} {{item.name}}</div>
             </div>
            </div>
         </div> 
    </div>
</template>

<script>

import Mac from "./mac.vue";
import Windows from "./win.vue";
export default {
  data() {
    return {
      descript_word:'',
      mac: true,
      input: "",
      selected: "common",
      list: [],
      warn_text:true,
      items:[
           {'id':'Ctrl','highlight':false},{'id':'Alt','highlight':false},{'id':'Shift','highlight':false},
           {'id':'Tab','highlight':false},{'id':'CapsLocks','highlight':false},{'id':'Enter','highlight':false},
           {'id':'','highlight':false},{'id':'H','highlight':false},{'id':'I','highlight':false},
           {'id':'J','highlight':false},{'id':'K','highlight':false},{'id':'M','highlight':false},
           {'id':'A','highlight':false},{'id':'B','highlight':false},{'id':'C','highlight':false},
           {'id':'D','highlight':false},{'id':'E','highlight':false},{'id':'F','highlight':false},
           {'id':'G','highlight':false},{'id':'H','highlight':false},{'id':'I','highlight':false},
           {'id':'J','highlight':false},{'id':'K','highlight':false},{'id':'M','highlight':false},
           {'id':'N','highlight':false},{'id':'O','highlight':false},{'id':'P','highlight':false},
           {'id':'Q','highlight':false},{'id':'R','highlight':false},{'id':'S','highlight':false},] 
    };
  },
  components: {
    mac: Mac,
    windows: Windows
  },
  methods: {
    to_mac() {
      this.mac = true;
    },
    to_windows() {
      this.mac = false;
    },
    send() {
      let system = "win";
      if (this.mac == true) {
        system = "mac";
      }
      let myData = {
        data: {
          kind: this.selected,
          keyword: this.input,
          system: system
        },
        method: "POST"
      };
      fetch("", myData).then(function(res) {
        if (res.ok) {
          this.warn_text=false;
          this.list = res.more;
          let commandArr=res.name.split('-');
          this.descript_word=res.desc;
          this.items.map(function(item){
              if(commandArr.IndexOf(item.id)!==-1){
                  item.highlight=true;
              }
              setInterval(()=>{
                  item.highlight=false;
              },3000);
          });
        } else {
            this.warn();

        }
      });
    },
    warn(){
        this.warn_text=true;
    }
  }
};
</script>

<style lang="scss">
<<<<<<< HEAD
// @mixin size($width,$height){
//     width: ($width/1200*100%);
//     height: ($height/650*100%);
// }
// @mixin pos($top,$left){
//    position: relative;
//    top: ($top/650*100%);
//    left: ($left/1200*100%);
// }
*{
    margin: 0;
    padding: 0;
}
html{
    height: 100%;
}
body{
    min-height: 100%;
}
.all{
    margin:0 auto;
    height: 100%;
    width: 100%;

}
.top-logo{
    width: 100%;
    height: 41px;
    background-color: black;
}
.left{
    float: left;
    width: (846/1200*100%);
    height: 100%;

}
.tab{
    margin-top: (30/609*100%);
    margin-left: (12/846*100%);
}
.search_all{
    margin-top: (25/609*100%);
}
select{
    width: (121/846*100%);
    height: 44px;
    border: solid;
    border-color: rgb(142,173,249);
    border-width: 2px;
    float: left;
}
input {
    width: (592/846*100%);
    height: 40px;
    border: solid;
    border-color: rgb(142,173,249);
    border-width: 2px;
    float: left;

}
.icon{
  width: (61/846*100%);
  height: 47px;
}
.warn_text{
    margin-left: (121/846*100%);
    font-size:(20/846*100%);
    color: red;
}
.descript_word{
    margin-left: (144/846*100%);
    margin-top: (16/846*100%);
    font-size: 1.25rem;
    height: 100%;
}
.right{
    width: (354/1200*100%);
}
.list{  
    margin-top: (65/253*100%);
    margin-left: (36/289*100%);
    border-width:(5/253*100%); 
    border:solid;
    border-color: rgb(238, 243, 246);
    
}
.list_items{
     height: 420px;
     overflow-y: scroll;
}
.list_title{
    height:(34/253*100%) ;
    padding: 1rem 1rem;
    color: rgb(111, 126, 146);
}
.list{
    height: 100%;
    background-color: rgb(249, 249, 249);
}
.list_item{
    height: 38px;
}

</style>
