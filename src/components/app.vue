<template>
    <div>
        <div class="top_logo">
            <div class="logo"></div>
        </div>
        <div class="wrap margin">
            <div class="left inline_block">
                <div class="tab">
                    <router-link to="/">
                        <a v-on:click="to_mac" v-bind:class="{tab_light: mac}">Mac</a>
                    </router-link>
                    <span> | </span>
                    <router-link to="/windows">
                        <a v-on:click="to_windows" v-bind:class="{tab_light: !mac}">Windows</a>
                    </router-link>
                </div>
                <div class="search_all">
                    <div class="text_box full_width">
                    <div class="chooseKind full_height vertical_align inline_block">
                        <select v-model="selected" class="full_width full_height">
                            <option value="common">Common</option>
                            <option value="word">Word</option>
                        </select>
                    </div>
                    <input type="text" placeholder="请输入你要搜索的快捷键" class="inline_block input_box vertical_align" v-model="input">
                    <div v-on:click="send" class="inline_block full_height icon_box vertical_align">
                        <svg viewBox="0 0 200 200" class="icon full_height full_width">
                             <use xmlns:xlink="http://www.w3.org/2000/svg" xlink:href="#search_icon"></use>
                        </svg>
                    </div>
                    </div>
                </div>
                <div v-if="warn_text" class="warn_text">
                    你找的快捷键不存在
                </div>
                <div class="descript_word">
                    {{descript_word}}
                </div>
                 <router-view :light="this.light"></router-view>
            </div>
        </div>
        <div class="right inline_block" v-if="!this.warn">
            <div class="list">
                <div class="list_title"> 常用快捷键</div>
                <div class="list_items">
                    <div v-on:click="onekey(item.belong, item.keys)" v-for="item in list" :key="item" class="list_item text_align">
                        <div class="line_height">{{item.keys}} {{item.name}}</div>
                    </div>
                </div>
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
                descript_word: '',
                mac: true,
                keys: [],
                input: "",
                selected: "common",
                list: [],
                warn_text: false
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
            light() {
                this.$emit('keys',"haha")
            },
            send() {
                let system = "Win";
                if (this.mac == true) {
                    system = "Mac";
                }
                fetch('http://120.77.246.73:5003/api/key/', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                            kind: this.selected,
                            keyword: this.input,
                            system: system
                        })
                    }).then(res => {
                        if (res.ok)
                            return res.json()
                        else {
                            this.warn_text = true
                            this.list = []
                            }
                        }).then (res => {
                            this.items = res.one
                            this.list = res.more
                            this.warn_text = false
                             this.$emit('update', this.items);
                        })
            },
            onekey(selected, input) {
                let system = "Win";
                if (this.mac == true) {
                    system = "Mac";
                }
                fetch('http://120.77.246.73:5003/key/', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                            kind: selected,
                            keyword: input,
                            system: system
                        })
                    }).then(res => {
                        if (res.ok)
                            return res.json()
                        else {
                            this.warn_text = true
                            this.list = []
                        }
                        }).then (res => {
                            this.items = res.one
                            this.list = res.more
                            this.warn_text = false
                        })
            }
        }
    };
</script>

<style lang="scss">
.logo {
    width: 60px;
    height: 60px;
    margin-left: 6%;
    background-image: url('../pictures/logo.png');
    background-position: center;
    background-size: 160%;
    background-repeat: no-repeat;
    display: block;
    text-align: center;
}
.list_item:hover {
    background: rgb(142, 173, 249);
    color: #fff;
    cursor: pointer;
}
* {
  margin: 0;
  padding: 0;
}
.text_box {
  font-size: 0;
  position: relative;
  height: 44px;
}

.tab_light {
  color: #3977f8;
}

.top_logo {
  width: 100%;
  height: 60px;
  background-color: black;
}

.left {
  float: left;
  width: (846/1200*100%);
  height: 100%;
}

.tab {
  font-size: 20px;
  margin-top: (30/609*100%);
  margin-left: (12/846*100%);
}

.search_all {
  margin-top: (25/609*100%);
}
.chooseKind {
  width: 15%;
}
select {
  width: (121/846*100%);
  height: 44px;
  border: solid;
  border-color: rgb(142, 173, 249);
  border-width: 2px;
}

input {
  border-radius: 2px;
  font-size: 16px;
  width: (592/846*100%);
  height: 38px;
  border: solid;
  border-color: rgb(142, 173, 249);
  border-width: 2px;
}

.icon_box {
    cursor: pointer;
  position: relative;
  width: 10%;
  border-radius: 2px;
}

.icon {
  // width: (61/846*100%);
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  position: absolute;
  background: rgb(142, 173, 249);
}

.warn_text {
  margin-left: (121/846*100%);
  color: red;
  margin-top: 20px;
}
.descript_word {
  margin-left: (144/846*100%);
  margin-top: (16/846*100%);
  height: 100%;
}

.right {
  width: (354/1200*100%);
}

.list {
  margin-top: (65/253*100%);
  margin-left: (36/289*100%);
  border-width: (5/253*100%);
  border: solid;
  border-color: rgb(238, 243, 246);
}

.list_items {
  height: 420px;
  overflow-y: scroll;
}

.list_title {
  height: (34/253*100%);
  padding: 1rem 1rem;
  color: rgb(111, 126, 146);
}

.list {
  height: 100%;
  background-color: rgb(249, 249, 249);
}

.list_item {
   height: 38px;
}
.line_height {
    line-height: 38px;
}
</style>
