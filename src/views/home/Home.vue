<template>
    <div class="main">
        <top class="header"></top>
<!--        <el-button type="primary" @click="btnCli">主要按钮</el-button>-->
        <el-container class="content">
            <div class="row">
                <el-main style="height: 1020px">
                    <div class="de">
                        <span>问题</span>
                        <el-link type="info" href="">更多</el-link>
                    </div>
                    <li class="item" v-for="qa in this.qas">
                        <a class="link" :href="'/qa/details?id='+ qa.id" target="_blank">{{qa.title}}</a>
                        <div class="split"></div>
                    </li>

                </el-main>
            </div>
            <div class="row">
                <el-main>
                    <div class="de">
                        <span>文章</span>
                        <el-link type="info">更多</el-link>
                    </div>
                    <li class="item" v-for="art in this.articles">
                        <a class="link" :href="art.url" target="_blank">{{art.title}}</a>
                        <div class="split"></div>
                    </li>
                </el-main>
                <el-main>
                    <div class="de">
                        <span>软件</span>
                        <el-link type="info">更多</el-link>
                    </div>
                    <li class="item">
                        <el-link class="link">我咋还记得快乐圣诞节圣诞节啊快乐jaskakldjad我咋还记得快乐圣诞节圣诞节啊快乐jaskakldjad我咋还记</el-link>
                        <div class="split"></div>
                    </li>
                </el-main>
            </div>
        </el-container>

        <bottom class="footer"></bottom>
    </div>
</template>

<script>
    import Top from "components/common/Top"
    import Bottom from "components/common/Bottom"

    import {findHotArticleDesc} from "../../network/home";
    import {findHotProblemDesc} from "../../network/home";

    export default {
        name: "Home",
        components:{
            Top,
            Bottom
        },
        created() {
            findHotArticleDesc().then(res => {
                this.articles = res.data
            }).catch(err => {
                console.log(err);
            })

            findHotProblemDesc().then(res => {
                this.qas = res.data
            }).catch(err => {
                console.log(err);
            })
        },
        data(){
            return {
                articles: [],
                qas: []
            }
        },
        methods: {
            btnCli(){
                this.$router.push("/login");
            }
        }
    }
</script>

<style scoped>
    .split{
        border: solid 1px #d3dce6;
        width: 97%;
    }
    a:hover{
        color: #909399;
        cursor: pointer;
    }
    .content{
        width: 80%;
        margin-left: 10%;
        display: flex;
        justify-content: space-between;
    }

    .row{
        margin-top: 30px;
        margin-bottom: 30px;
        width: 49%;
    }

    .el-main {
        background-color: rgb(229, 233, 242);
        margin-bottom: 20px;
        margin-top: 20px;
        height: 500px;
        padding: 0;
    }

    .de{
        background-color: #d3dce6;
        line-height: 30px;
        padding-left: 20px;
        padding-right: 20px;
        display: flex;
        justify-content: space-between;
    }
    .link{
        width: 97%;
        justify-content: left;
        display: block;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
    }
    .item{
        list-style: none;
        margin-top: 30px;
        margin-left: 20px;
        font-size: 18px;
    }
</style>