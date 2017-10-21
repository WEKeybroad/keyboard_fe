<template>
    <div>
        <div class="wrap margin">
            <div class="left inline_block">
                <div class="tab">
                    <router-link to="/">
                        <a v-on:click="to_mac" v-bind:class="{highlight: mac}">Mac</a>
                    </router-link>
                    <router-link to="/windows">
                        <a v-on:click="to_windows" v-bind:class="{ highlight: !mac}">Windows</a>
                    </router-link>
                </div>
                <div class="text_box">
                    <input type="text" placeholder="快捷键" class="input_box">
                    <div class="icon_box">
                        <svg viewBox="0 0 200 200" class="icon">
                                <use xmlns:xlink="http://www.w3.org/2000/svg" xlink:href="#search_icon"></use>
                            </svg>
                    </div>
                    <div class="search_icon"></div>
                </div>
                <router-view> </router-view>
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
            o_windows() {
                this.mac = false
            }
        }
    };
</script>

<style lang="scss">
    .tab_light {
        color: #5389f9;
    }
    
    .input_box {
        width: 200px;
        height: 50px;
    }
    
    .icon_box {
        height: 40px;
        width: 100px;
        background-color: #000;
    }
</style>
