<template>
    <div class="bottom">
        <el-image :src="require('../../assets/img/footer/footer_icon.jpg')" fit="fill" class="footer_img"></el-image>
    </div>
</template>

<script>
    export default {
        name: "bottom",
        created() {

        },
        methods: {
        }
    }
</script>

<style scoped>
    .bottom{
        width: 100%;
        height: 100px;
    }

    .footer_img{
        width: 100%;
        height: 100%;
    }

</style>