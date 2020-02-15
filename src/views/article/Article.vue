<template>
    <div>
        <top></top>
        <router-view v-bind:articles="articles" v-bind:articleDetails="articleDetails"></router-view>
<!--        <bottom></bottom>-->
    </div>
</template>

<script>

    import Top from "components/common/Top"
    import Bottom from "components/common/Bottom"

    import {findArticle} from "../../network/article";
    import {findArticleById} from "../../network/article";

    export default {
        name: "Article",
        components: {
            Top,
            Bottom
        },
        data(){
            return {
                articles: [],
                articleDetails: null
            }
        },
        methods: {

        },
        created() {
            if(this.$route.path === '/article'){
                findArticle().then(res => {
                    this.articles = [...res.data]
                }).catch(err => {
                    console.log(err);
                })
            }else if(this.$route.path === '/article/details'){
                findArticleById(this.$route.query.id).then(res => {
                    this.articleDetails = res.data

                }).catch(err => {
                    console.log(err);
                })
            }
        },

    }
</script>

<style scoped>

</style>