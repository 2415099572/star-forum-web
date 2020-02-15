<template>
    <div class="header">
        <el-row :gutter="0">
            <el-col :xs="8" :sm="6" :md="4" :lg="4" :xl="3">
                <div class="grid-content bg-purple">
                    <!--<el-image style="width: 100px; height: 100px" src="~assets/img/header/star_logo.png" fit="scale-down"></el-image>-->
                    <el-image :src="require('../../assets/img/header/star_logo.jpg')" class="logo" fit="scale-down"></el-image>
                    <!--<img src="~assets/img/header/star_logo.png">-->
                </div>
            </el-col>
            <el-col :xs="4" :sm="6" :md="8" :lg="10" :xl="11">
                <div class="grid-content bg-purple-light">
                    <el-menu :default-active="this.$route.path" class="el-menu" mode="horizontal" @select="handleSelect" background-color="#e5e9f2" router>
                        <el-menu-item index="/home" class="menu_item">首  页</el-menu-item>
                        <el-menu-item index="/article" class="menu_item">文  章</el-menu-item>
                        <el-menu-item index="/qa" class="menu_item">问  答</el-menu-item>
                        <el-menu-item index="/soft" class="menu_item">软  件</el-menu-item>
                    </el-menu>
                </div>
            </el-col>
            <el-col :xs="4" :sm="6" :md="8" :lg="6" :xl="8">
                <div class="grid-content bg-purple search">
                    <el-input placeholder="请输入内容" prefix-icon="el-icon-search" v-model="search"></el-input>
                </div>
            </el-col>
            <el-col :xs="8" :sm="6" :md="4" :lg="4" :xl="2">
                <div class="grid-content bg-purple-light user">
                    <el-link href="https://element.eleme.io" target="_blank" style="font-size: larger">通知</el-link>
                    <el-dropdown>
                        <span class="el-dropdown-link" style="font-size: larger">+</span>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item>黄金糕</el-dropdown-item>
                            <el-dropdown-item>狮子头</el-dropdown-item>
                            <el-dropdown-item>螺蛳粉</el-dropdown-item>
                            <el-dropdown-item divided>蚵仔煎</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                    <el-avatar :src="require('../../assets/img/header/avatar.png')"></el-avatar>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    export default {
        name: "Top1",
        data() {
            return {
                search: ''
            };
        },
        methods: {
            handleSelect(key, keyPath) {
                console.log(key, keyPath);
                this.activeIndex = key;
                console.log(this.activeIndex)

            }
        }
    }
</script>

<style scoped>
    .bg-purple {
        background: #d3dce6;
        /*background-color: rgb(229, 233, 242);*/
    }
    .bg-purple-light {
        background: #e5e9f2;
    }
    .grid-content {
        height: 80px;
    }

    .logo{
        height: 100%;
    }

    .el-menu{
        height: 100%;
        display: flex;
        justify-content: space-around;
        align-items: flex-end;
    }

    .menu_item{
        font-size: x-large;
        height: 100%;
        display: flex;
        align-items: flex-end;
    }

    .search{
        padding-left: 20px;
        padding-right: 20px;
        display: flex;
        align-items: center;
    }

    .user{
        display: flex;
        justify-content: space-around;
        align-items: center;
        padding-left: 40px;
        padding-right: 40px;
    }

</style>