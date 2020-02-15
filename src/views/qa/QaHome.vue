<template>
    <el-container class="content">
        <el-header>
            <el-tabs v-model="activeName" @tab-click="handleClick" stretch>
                <el-tab-pane label="推荐" name="first"></el-tab-pane>
                <el-tab-pane label="JAVA" name="second"></el-tab-pane>
                <el-tab-pane label="C++" name="third"></el-tab-pane>
                <el-tab-pane label="PYTHON" name="fourth"></el-tab-pane>
                <el-tab-pane label="其他" name="five"></el-tab-pane>
            </el-tabs>
        </el-header>
        <el-container>
            <el-main>
                <el-tabs v-model="activeName" @tab-click="handleClick" stretch>
                    <el-tab-pane label="最新回答" name="first"></el-tab-pane>
                    <el-tab-pane label="热门回答" name="second"></el-tab-pane>
                    <el-tab-pane label="等待回答" name="third"></el-tab-pane>
                </el-tabs>
                <ul>
                    <li class="qa_item">
                        <div class="number">
                            <div class="border browse">
                                <p>12</p>
                                <p>浏览</p>
                            </div>
                            <div class="border answer">
                                <p>9</p>
                                <p>回答</p>
                            </div>
                        </div>
                        <div class="info">
                            <div class="question">
                                <p class="author">
                                    <span class="name">luckness</span>
                                    <span>3分钟前回答</span>
                                </p>
                                <p class="title">
                                    <a href="./qa-detail.html" target="_blank">有关PHP初级进阶的问题？</a>
                                </p>
                            </div>

                            <div class="other">
                                <ul>
                                    <li class="label_tag">
                                        <el-tag effect="dark" size="mini">
                                            Php
                                        </el-tag>
                                    </li>
                                    <li class="label_tag">
                                        <el-tag effect="dark" size="mini">
                                            Javascript
                                        </el-tag>
                                    </li>
                                </ul>
                                <div class="pageView">
                                    <p>浏览量 50 | 2017-07-05 15:09 来自 <a href="#">XX </a></p>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </el-main>
            <el-aside width="200px">
                <div class="qa">
                    <p>今天，有什么好东西想与大家分享？</p>
                    <el-button type="primary" size="small">发 布 问 题</el-button>
                </div>
            </el-aside>
        </el-container>
    </el-container>
</template>

<script>
    export default {
        name: "QaHome",
        data(){
            return {
                activeName: "first",
                nickname: "hello",
                // items: 10,
                // title: "阿达地方风味伟大的adsdadadadsadadsadsadasdasdadadsadadasdadadadaDSAdadad大大大三的撒打算的撒打算的等哈就开始等哈开机哈单位开会发空间发顺丰喝咖啡能看见你快来吧减肥呢",
                // date: "2020-01-01 20:00:00",
                // content: "asdjfhakfhajjwdijalkjdihdbjdhciahwhiwjdilhkfjljlhwijdhhfiwdjjlkajcjshiwjdjkjkjwoiwrjkkjfskjowjofhwooa"
            }
        },
    }
</script>

<style scoped>
    .el-header {
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
        /*background-color: beige;*/
    }

    .qa{
        width: 100%;
        height: 100px;
        margin-top: 13%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        background-color: rgb(229, 233, 242);
        border: 1px solid #409EFF;;
    }

    .qa_item{
        background-color: rgb(229, 233, 242);
        display: inline-block;
        margin-top: 0.5%;
        width: 100%;
        display: flex;
        align-items: center;
    }

    .number{
        margin-left: 2%;
        margin-top: 1.5%;
        margin-bottom: 1.5%;
    }

    .border{
        border-style: solid;
        border-width: 1px;
        border-radius: 5px;
        text-align: center;
        padding: 2px 3px 2px 3px;
    }
    .browse{
        border-color: #FF3333;
        color: #FF3333;
        margin-bottom: 40%;
    }
    .answer{
        border-color: #2B91D5;
        color: #2B91D5;
    }

    .info{
        margin-left: 2%;
        display: flex;
        flex-grow: 1;
        flex-direction: column;
        justify-content: space-between;
        height: 80px;
    }

    .name{
        margin-right: 10px;
    }
    .title{
        margin-top: 8px;
    }

    .other{
        display: flex;
        justify-content: space-between;
    }

    .label_tag{
        display: inline-block;
        margin-right: 5px;
    }
    .pageView{
        margin-right: 20px;
    }
</style>