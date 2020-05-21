<template>
    <div class="details">
        <h1 class="title">{{this.qa.title}}</h1>
        <span class="info">{{this.qa.nickName}} {{this.qa.createTime}}·{{this.qa.updateTime}}</span>
        <div class="qaContent" v-html="this.qa.content">
        </div>
        <div class="divid">
            <span style="margin-left: 10px; font-size: 20px">回 答</span>
            <span style="margin-right: 10px; font-size: 20px">{{this.qa.reply}}</span>
        </div>
        <div class="reply" v-if="this.qa.replies != null">
            <li class="reply_details">
                <div class="user_info">
                    <a href="#" class="info_link" target="_blank">
                        <el-avatar :src="require('../../assets/img/header/avatar.png')" size="small"></el-avatar>
                        <p class="nickname">{{this.qa.nickName}}</p>
                    </a>
                    <span class="time">{{this.qa.createTime}}</span>
                </div>
                <div class="content">
                    {{this.qa.content}}
                </div>
                <el-divider></el-divider>
            </li>
        </div>

        <div class="input">
            <el-input type="textarea" :autosize="{ minRows: 4}" placeholder="请输入内容" v-model="textarea" maxlength="1000" show-word-limit class="re_content"></el-input>
            <el-button type="primary" class="com_btn">发表回复</el-button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "QaDetails",
        components: {
        },
        data(){
            return {
                title: "zhegewenti",
                user: "aaa",
                createTime: "1小时前",
                updateTime: "30分钟前",
                content: '<div>asdasdads</div>' +
                    '<pre style="border-style: solid;border-color: #C4C4C4;border-width: 1px;padding: 5px;background-color: #d3dce6;word-break: break-all;word-wrap: break-word;white-space: pre-wrap">' +
                    '<code>public static void main(String[] args){}</code></pre>',
                qa: {},
                textarea: '',
            }
        },
        created() {
            this.init();
        },
        methods: {
            init: function () {
                this.qa = JSON.parse(this.$route.query.qaDetails)
            }
        }
    }
</script>

<style scoped>
    .details{
        background-color: rgb(229, 233, 242);
        width: 70%;
        margin-left: 15%;
        margin-top: 20px;
    }
    .title{
        width: 90%;
        margin-left: 5%;
        line-height: 40px;
        padding-top: 30px;
    }
    .info{
        margin-left: 5%;
        margin-top: 5px;
        display: block;
    }
    .qaContent{
        width: 90%;
        margin-left: 5%;
        margin-top: 20px;
    }

    .divid{
        width: 90%;
        height: 40px;
        border-bottom: #909399;
        border-bottom-style: solid;
        border-bottom-width: 1px;
        border-top: #909399;
        border-top-style: solid;
        border-top-width: 1px;
        margin-top: 30px;
        margin-bottom: 30px;
        margin-left: 5%;
        line-height: 40px;
        display: flex;
        justify-content: space-between;
    }

    .reply{
        width: 90%;
        margin-left: 5%;
    }
    .reply_details{
        list-style: none;
        margin-left: 2%;
        min-height: 100px;
    }
    .user_info{
        display: flex;
        align-items: center;
    }
    .info_link{
        display: flex;
        align-items: center;
        width: max-content;
    }
    .nickname{
        margin-left: 15px;
        font-size: 12px;
    }
    .time{
        margin-left: 25px;
        font-size: 10px;
    }
    .content{
        margin-left: 15px;
        margin-top: 10px;
    }

    .input{
        display: flex;
        width: 90%;
        margin-left: 5%;
        margin-top: 30px;
        flex-direction: column;
    }
    .re_content{
        width: 100%;
    }
</style>

