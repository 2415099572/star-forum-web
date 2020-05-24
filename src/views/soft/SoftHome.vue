<template>
    <el-container class="content">
        <el-header>
            <el-tabs v-model="activeName" @tab-click="handleClick" stretch>
                <el-tab-pane label="推荐" name="0"></el-tab-pane>
                <el-tab-pane label="JAVA" name="1"></el-tab-pane>
                <el-tab-pane label="C++" name="3"></el-tab-pane>
                <el-tab-pane label="PYTHON" name="4"></el-tab-pane>
                <el-tab-pane label="其他" name="-1"></el-tab-pane>
            </el-tabs>
        </el-header>
        <el-container>
            <el-main>
                <li class="soft_item" v-for="soft in softs">
                    <a :href="soft.url" target="_blank" class="soft_name">{{soft.name}}</a>
                    <div class="info">
                        <p class="introduction">{{soft.describe}}</p>
                        <p class="datetime">{{soft.nickname }}发布于： {{soft.createTime}}</p>
                    </div>
                </li>
            </el-main>
            <el-aside width="200px">
                <div class="upload">
                    <p>今天，想与别人分享什么软件？</p>
                    <el-button type="primary" size="small" @click="tofileUpload">上 传</el-button>
                </div>
            </el-aside>
        </el-container>
    </el-container>
</template>

<script>
    export default {
        name: "SoftHome",
        methods: {
            handleClick(){

            },
            tofileUpload(){
                this.$router.push("/soft/upload")
            }
        },
        data(){
            return {
                activeName: "1"
            }
        },
        props: {
            softs: {
                type: Array,
                default: null
            }
        }
    }
</script>

<style scoped>
    .el-header {
        /*background-color: cadetblue;*/
        color: #333;
        text-align: center;
        line-height: 60px;
    }
    .el-main {
        color: #333;
    }
    .el-aside {
        background-color: #D3DCE6;
        color: #333;
    }

    .content{
        width: 80%;
        margin-left: 10%;
    }

    .upload{
        width: 100%;
        height: 100px;
        margin-top: 14.5%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        background-color: rgb(229, 233, 242);
        border: 1px solid #409EFF;;
    }

    .soft_item{
        min-height: 150px;
        margin-top: 10px;
        width: 100%;
        /*background-color: #D3DCE6;*/
        background-color: rgb(229, 233, 242);
        list-style: none;
        padding-top: 18px;
        padding-bottom: 18px;
        display: block;
        position: relative;
    }
    .soft_name{
        margin-left: 2%;
        margin-right: 2%;
        /*width: 45%;*/
        font-size: 18px;
        text-overflow:ellipsis; /*用来代替的格式*/
        white-space: nowrap; /*规定段落中的文本不进行换行*/
        overflow: hidden;
        display: block;
    }
    .info{
        width: 94%;
        margin-left: 3%;
        margin-top: 5px;
    }
    .datetime{
        position: absolute;
        bottom: 5px;
        right: 30px;
        color: #606266;
    }
    .introduction{
        margin-top: 10px;
        margin-bottom: 10px;
    }
</style>