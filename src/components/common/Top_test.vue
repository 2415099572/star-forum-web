<template>
    <div class="header">
        <el-row :gutter="0">
            <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1">
                <div class="grid-content bg-purple">
                    <img class="logo" src="~assets/img/header/star_logo.png">
                </div>
            </el-col>
            <el-col :xs="5" :sm="7" :md="9" :lg="10" :xl="12">
                <div class="grid-content bg-purple-light">
                    <ul class="nav">
                        <li><a href="#">首  页</a></li>
                        <li><a href="#">文  章</a></li>
                        <li><a href="#">问  答</a></li>
                        <li><a href="#">软  件</a></li>
                    </ul>
                </div>
            </el-col>
            <el-col :xs="3" :sm="5" :md="7" :lg="7" :xl="9">
                <div class="grid-content bg-purple search">
                    <el-input placeholder="请输入内容" prefix-icon="el-icon-search"></el-input>
                </div>
            </el-col>
            <el-col :xs="8" :sm="6" :md="4" :lg="4" :xl="2">
                <div class="grid-content bg-purple-dark user">
                    <a href="#">通知</a>
                    <el-dropdown class="dropdown">
                        <span class="el-dropdown-link">+</span>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item divided>黄金糕</el-dropdown-item>
                            <el-dropdown-item divided>狮子头</el-dropdown-item>
                            <el-dropdown-item divided>螺蛳粉</el-dropdown-item>
                            <el-dropdown-item divided>蚵仔煎</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                    <img src="~assets/img/header/avatar.svg" class="avatar">
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    export default {
        name: "Top",
        props: {
            avatarUrl: "~assets/img/header/avatar.png"
        },
        methods: {
        }
    }
</script>

<style scoped>
    /*.el-col {*/
        /*border-radius: 4px;*/
    /*}*/
    /*.bg-purple-dark {*/
        /*background: #99a9bf;*/
    /*}*/
    /*.bg-purple {*/
        /*background: #d3dce6;*/
    /*}*/
    /*.bg-purple-light {*/
        /*background: #e5e9f2;*/
    /*}*/
    .grid-content {
        /*border-radius: 4px;*/
        /*min-height: 80px;*/
        height: 80px;
    }

    .logo{
        height: 100%;
        margin-left: 50%;
    }

    .nav{
        height: 100%;
        display: flex;
        justify-content: space-around;
        align-items: center;
    }

    .nav li a{
        font-size: x-large;
    }

    .search{
        display: flex;
        align-items: center;
        padding-right: 20px;
        padding-left: 20px;
    }

    .user{
        font-size: x-large;
        display: flex;
        align-items: center;
        padding-left: 25%;
    }

    .el-dropdown-link {
        cursor: pointer;
        /*color: #409EFF;*/
        color: #C4C4C4;
        font-size: x-large;
    }

    .dropdown{
        margin-right: 5%;
        margin-left: 5%;
    }

    .avatar{
        height: 70%;
    }
</style>