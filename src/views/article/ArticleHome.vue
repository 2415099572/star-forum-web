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
                <ul>
                    <li v-for="article in articles" class="article_item">
                        <el-link :href="article.url" target="_blank" class="article_title" :underline="false">{{article.title}}</el-link>
                        <div class="info">
                            <a href="#" class="info_link" target="_blank">
                                <el-avatar :src="require('../../assets/img/header/avatar.png')" size="small"></el-avatar>
                                <p class="nickname">{{nickname}}</p>
                            </a>
                            <p class="datetime">{{article.date}}</p>
                        </div>
                        <a :href="article.url" class="article_content" target="_blank">{{article.content}}</a>
                    </li>
                    <!--<li v-for="article in items" class="article_item">-->
                        <!--<el-link href="https://element.eleme.io" target="_blank" class="article_title" :underline="false">{{title}}</el-link>-->
                        <!--<div class="info">-->
                            <!--<a href="#" class="info_link" target="_blank">-->
                                <!--<el-avatar :src="require('../../assets/img/header/avatar.png')" size="small"></el-avatar>-->
                                <!--<p class="nickname">{{nickname}}</p>-->
                            <!--</a>-->
                            <!--<p class="datetime">{{date}}</p>-->
                        <!--</div>-->
                        <!--<a href="#" class="article_content" target="_blank">{{content}}</a>-->
                    <!--</li>-->
                </ul>
            </el-main>
            <el-aside width="200px">
                <div class="write">
                    <p>今天，有什么想写的东西？</p>
                    <el-button type="primary" size="small">写 文 章</el-button>
                </div>
            </el-aside>
        </el-container>
    </el-container>
</template>

<script>
    export default {
        name: "ArticleHome",
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
        props: {
            articles: {
                type: Array,
                default: null
            }
        },
        methods: {
            handleClick(){

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

    .article_item{
        height: 150px;
        margin-top: 10px;
        width: 100%;
        /*background-color: #D3DCE6;*/
        background-color: rgb(229, 233, 242);
    }
    .article_title{
        margin-left: 2%;
        margin-top: 2%;
        width: 45%;
        font-size: medium;
        text-overflow:ellipsis; /*用来代替的格式*/
        white-space: nowrap; /*规定段落中的文本不进行换行*/
        overflow: hidden;
        display: inline-block;
    }

    .info{
        display: flex;
        align-items: center;
        margin-top: 1%;
    }
    .info_link{
        display: flex;
        align-items: center;
        /*padding-left: 2%;*/
        margin-left: 2%;
    }
    .nickname{
        margin-left: 15px;
        font-size: 12px;
    }
    .datetime{
        padding-left: 50px;
        padding-right: 10px;
        text-align: right;
        color: #606266;
        font-size: 12px;
    }

    .article_content{
        word-break: break-all;
        text-overflow: ellipsis;
        display: -webkit-box; /** 对象作为伸缩盒子模型显示 **/
        -webkit-box-orient: vertical; /** 设置或检索伸缩盒对象的子元素的排列方式 **/
        -webkit-line-clamp: 2; /** 显示的行数 **/
        overflow: hidden;  /** 隐藏超出的内容 **/
        width: 96%;
        margin-left: 2%;
        margin-top: 15px;
        color: #606266;
    }

    .article_content:hover{
        color: #606266;
        text-decoration:underline;
    }

    .write{
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
</style>