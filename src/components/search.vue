<template>
    <div>
        <div class="left">
            <input type="text" placeholder="快捷键" class="input_box">
            <div class="icon_box">
                <svg viewBox="0 0 200 200" class="icon">
                    <use xmlns:xlink="http://www.w3.org/2000/svg" xlink:href="#search_icon"></use>
                </svg>
            </div>
        </div>
        <div class="right"></div>
    </div>
</template>

<script>
    export default {
        data() {
            return {};
        },
        methods: {}
    };
</script>

<style lang="scss">
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
