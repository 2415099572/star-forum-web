<template>
    <div class="details" v-if="articleDetails != null">
        <h2 class="title">{{articleDetails.title}}</h2>
        <div class="info">
            <span>{{nickname}}</span>
            <span>发布于{{articleDetails.date}}</span>
            <el-button icon="iconfont icondianzan1" circle class="thumb">&nbsp;{{articleDetails.thumbup}}</el-button>
            <el-button icon="iconfont iconliulan" circle class="visit" disabled="">&nbsp;{{articleDetails.visits}}</el-button>
        </div>
        <div class="content">{{articleDetails.content}}</div>
        <div class="comment">
            <el-input type="textarea" :autosize="{ minRows: 4}" placeholder="请输入内容" v-model="textarea" maxlength="1000" show-word-limit class="com_content"></el-input>
            <el-button type="primary" class="com_btn">发表评论</el-button>
        </div>
        <li class="commentDetails" v-for="item in articleDetails.comments">
            <div class="com_tar">
                <div class="user_info">
                    <a href="#" class="info_link" target="_blank">
                        <el-avatar :src="require('../../assets/img/header/avatar.png')" size="small"></el-avatar>
                        <p class="nickname">{{item.uid}}</p>
                    </a>
                    <span class="time">{{getDateTime(item.createTime)}}</span>
                </div>
                <div class="menu">
                    <el-button icon="iconfont icondianzan1" circle class="icon">&nbsp;{{item.thumbup}}</el-button>
                    <el-button icon="iconfont iconhuifu" circle class="icon" @click="showReply(item)">&nbsp;{{item.reply}}</el-button>
                    <el-button circle class="icon">&nbsp;回复</el-button>
                </div>
            </div>
            <p class="other_com_content">{{item.content}}</p>
            <ul class="other_reply" v-show="item.isShow">
                <li v-for="reply in item.replys" style="border-left-width: 3px; border-left-color: #909399; border-left-style: solid; padding-left: 5px">
<!--                    {{reply}}-->
                    <div class="user_info">
                        <a href="#" class="info_link" target="_blank">
                            <el-avatar :src="require('../../assets/img/header/avatar.png')" size="small"></el-avatar>
                            <p class="nickname">{{reply.fromUid}}</p>
                        </a>
                        <span style="font-size: 12px;margin-left: 5px"> 回复 {{reply.toUid}}</span>
                        <span class="time">{{getDateTime(reply.createTime)}}</span>
                    </div>
                    <p class="other_com_content">{{reply.content}}</p>
                </li>
            </ul>
            <el-divider></el-divider>
        </li>
    </div>
    <div v-else>
        没有查到文章
    </div>
</template>

<script>
    export default {
        name: "ArticleDetails",
        data(){
            return {
                // title: "fskjfkfj",
                nickname: "llsss",
                // date: "2020-02-02 20:20:20",
                // content: "jfnakjfkajfaklsjaskldjsakldjsa",
                // thumbs: 0,
                // visits: 300,
                textarea: '',
            }
        },
        props: {
            articleDetails: {
                type: Object,
                default: null
            }
        },
        methods: {
            getDateTime(time){
                time = time.substring(0,19);
                time = new Date(time.replace(/-/g, "/").replace(/T/g, " "));
                let days = (new Date()).getTime() - time.getTime();
                if (parseInt(days / (1000 * 60 * 60 * 24 * 365)) !== 0){
                    return parseInt(days / (1000 * 60 * 60 * 24 * 365)) + "年前"
                }else if (parseInt(days / (1000 * 60 * 60 * 24)) !== 0){
                    return parseInt(days / (1000 * 60 * 60 * 24)) + "天前"
                }else if (parseInt(days / (1000 * 60 * 60)) !== 0){
                    return parseInt(days / (1000 * 60 * 60)) + "小时前"
                }else if(parseInt(days / (1000 * 60)) !== 0){
                    return parseInt(days / (1000 * 60)) + "分钟前"
                }else {
                    return parseInt(days / 1000) + "秒前"
                }
            },

            showReply(item){
                if(!item.isShow){
                    this.$set(item, 'isShow', false)
                    item.isShow = !item.isShow
                }else {
                    item.isShow = !item.isShow
                }
            }
        },
        computed: {

        },
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
    }
    .info{
        margin-left: 5%;
        font-size: smaller;
        color: #909399;
        margin-top: 10px;
    }
    .thumb{
        background-color: rgba(0, 0, 0, 0);
        border-style: none;
        font-size: smaller;
        color: #909399;
        margin-left: 70%;
    }
    .visit{
        background-color: rgba(0, 0, 0, 0);
        border-style: none;
        font-size: smaller;
        color: #909399;
    }
    .visit:hover{
        background-color: rgba(0, 0, 0, 0);
        color: #909399;
    }
    .content{
        width: 90%;
        margin-left: 5%;
        margin-top: 20px;
    }

    .comment{
        display: flex;
        width: 90%;
        margin-left: 5%;
        margin-top: 30px;
        flex-direction: column;
    }

    .com_content{
        width: 100%;
    }

    .commentDetails{
        width: 90%;
        margin-left: 5%;
        margin-top: 15px;
        list-style: none;
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
        /*margin-right: 70%;*/
    }
    .other_com_content{
        margin-top: 10px;
        font-size: 14px;
    }

    .com_tar{
        display: flex;
        justify-content: space-between;
    }
    .menu{
        display: flex;
        align-items: center;
    }
    .icon{
        background-color: rgba(0, 0, 0, 0);
        border-style: none;
        font-size: smaller;
        color: #909399;
    }
    .other_com_content{
        height: min-content;
    }

    .other_reply{
        margin-left: 20px;
        margin-top: 20px;
    }
</style>