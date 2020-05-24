<template>
    <div class="details" v-if="softDetails != null">
        <h2 class="name">{{softDetails.name}}</h2>
        <div class="info">
            <span>{{softDetails.nickname}}</span>
            <span>发布于 {{softDetails.createTime}}</span>
            <el-button icon="el-icon-thumb" circle class="thumb">&nbsp;{{softDetails.thumbup}}</el-button>
            <el-button icon="el-icon-download" circle class="download" @click="download(softDetails.name)">&nbsp;{{softDetails.download}}</el-button>
        </div>
        <div class="content">
            {{softDetails.describe}}
        </div>
    </div>
</template>

<script>

    export default {
        name: "SoftDetails",
        components: {
        },
        data(){
            return {
                content: "",
            }
        },
        props: {
            softDetails: {
                type: Object,
                default: null
            }
        },
        methods: {
            download(name){
                this.$emit("download", name)
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
        padding-top: 10px;
        min-height: 250px;
    }
    .name{
        width: 90%;
        margin-left: 5%;
        line-height: 30px;
    }
    .info{
        margin-left: 5%;
        font-size: smaller;
        color: #909399;
    }
    .thumb{
        background-color: rgba(0, 0, 0, 0);
        border-style: none;
        font-size: smaller;
        color: #909399;
        margin-left: 60%;
    }
    .download{
        background-color: rgba(0, 0, 0, 0);
        border-style: none;
        font-size: smaller;
        color: #909399;
    }
    .download:hover{
        background-color: rgba(0, 0, 0, 0);
        color: #909399;
    }
    .content{
        width: 90%;
        margin-left: 5%;
    }
</style>