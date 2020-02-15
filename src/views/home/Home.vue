<template>
    <div class="main">
        <top class="header"></top>
        <el-button type="primary" @click="btnCli">主要按钮</el-button>
        <bottom class="footer"></bottom>
    </div>
</template>

<script>
    import Top from "components/common/Top"
    import Bottom from "components/common/Bottom"

    export default {
        name: "Home",
        components:{
            Top,
            Bottom
        },
        methods: {
            btnCli(){
                this.$router.push("/login");
            }
        }
    }
</script>

<style scoped>

    .el-aside {
         /*background-color: #D3DCE6;*/
        background-color: cadetblue;
         color: #333;
         text-align: center;
         line-height: 200px;
     }

    .el-main {
        /*background-color: #E9EEF3;*/
        /*background-color: ;*/
        color: #333;
        text-align: center;
        line-height: 160px;
    }

    .content{
        width: 80%;
        margin-left: 10%;
    }

</style>