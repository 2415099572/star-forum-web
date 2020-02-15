<template>
    <div class="details">
        <h1 class="title">{{title}}</h1>
        <span class="info">{{user}} {{createTime}}·{{updateTime}}</span>
        <div class="qaContent" v-html="content">
        </div>
        <span>回答</span><span>举报</span>
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
                    '<code>public static void main(String[] args){}</code></pre>'
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
    }
    .info{
        margin-left: 5%;
    }
    .qaContent{
        width: 90%;
        margin-left: 5%;
        margin-top: 20px;
    }

</style>

