<template>
    <header>
        <Icon value="menu" @click="showSide"></Icon>
        <router-link :to="{path: '/search'}">
            <Icon value="search" class="gutter-left"></Icon>
        </router-link>
        <img class="logo" src="../assets/logo.png">

        <router-link :to="{path: '/my'}">
            <Icon value="account" class="gutter-right"></Icon>
        </router-link>
        <router-link :to="{path: '/cart'}">
            <Icon value="bags"></Icon>
        </router-link>
    </header>
</template>
<script>
import * as types from "@/store/mutation-types";
export default {
    name: 'Header',

    methods: {
        showSide() {
            if (!this.$store.state.isShowSide) {
                this.$store.commit(types.SHOW_SIDE);
            }
        }
    }
}
</script>
<style lang="scss" scoped>
@import '../scss/variables.scss';
$height: 50px;
header {
    // position: fixed;
    // top: 0;
    // left: 0;
    // z-index: $headerZIndex;
    display: flex;
    padding: 0 $gutter;
    background: $background;
    height: $height;
    width: 100%;
    i {
        font-size: .4rem;
        line-height: $height;
    }
    img.logo {
        text-align: center;
        display: table;
        margin: auto;
        height: 30px;
    }
}
</style>
