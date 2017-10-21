<template>
    <div>
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
                <div class="text_box">
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
                </div>
                <router-view></router-view>
            </div>
        </div>
        <div class="right inline_block">
            <div class="list"></div>
        </div>
    </div>
</template>

<script>
    import Mac from './mac.vue'
    import Windows from './win.vue'
    export default {
        data() {
            return {
                mac: true,
                input_word: "",
                group: "",
                warn: false
            };
        },
        components: {
            "mac": Mac,
            "windows": Windows
        },
        methods: {
            to_mac() {
                this.mac = true
            },
            to_windows() {
                this.mac = false
            },
            search() {
                fetch('/key/', {
                        method: 'POST',
                        headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                            group: this.group, 
                            
                        })
                    }).then(res => {
                        if (res.ok)
                        {}   
                    })
            }
        }
    };
</script>

<style lang="scss">
    .tab {
        margin-top: 70px;
        margin-bottom: 20px;
        font-size: 20px;
    }
    
    .tab_light {
        color: #5389f9;
    }
    
    .input_box {
        width: 75%;
        border: 2px solid #5389f9;
        font-size: 20px;
    }
    
    .icon_box {
        width: 8%;
        background-color: #000;
    }
    
    .text_box {
        font-size: 0;
        height: 45px;
        margin-bottom: 100px;
    }
    
    .drag_list {
        width: 15%;
        border: 2px solid #bfbfbf;
    }
    
    .icon {
        width: 100%;
        height: 100%;
    }
    .select {
        font-size: 20px;
    }
</style>
