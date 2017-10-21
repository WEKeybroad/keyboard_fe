<template>
    <div>
        <div class="top_logo">
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
                        <svg viewBox="0 0 200 200" class="icon full_height full_width" @click="send()">
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
                 <router-view></router-view>
            </div>
        </div>
        <div class="right inline_block">
            <div class="list">
                <div class="list_title"> 常用快捷键</div>
                <div class="list_items">
                    <div v-for='(item,index) in list' :key="item" class="list_item">{{++item.index}}.{{item.keys}} {{item.name}}</div>
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
            send() {
                console.log(this.selected)
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
                        this.warn_text = false;
                        this.list = res.more;
                        let commandArr = res.name.split('-');
                        this.descript_word = res.desc;
                        this.items.map(function(item) {
                            if (commandArr.IndexOf(item.id) !== -1) {
                                item.highlight = true;
                            }
                            setInterval(() => {
                                item.highlight = false;
                            }, 3000);
                        });
                    } else {
                        this.warn();
                    }
                });
            },
            warn() {
                this.warn_text = true;
            }
        }
    };
</script>

<style lang="scss">
    * {
        margin: 0;
        padding: 0;
    }
    
    // html {
    //     height: 100%;
    // }
    // body {
    //     min-height: 100%;
    // }
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
        height: 41px;
        background-color: black;
    }
    
    .left {
        float: left;
        width: (846/1200*100%);
        height: 100%;
    }
    
    .tab {
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
        font-size: 16px;
        width: (592/846*100%);
        height: 38px;
        border: solid;
        border-color: rgb(142, 173, 249);
        border-width: 2px;
    }
    
    .icon_box {
        position: relative;
        width: 10%;
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
</style>
