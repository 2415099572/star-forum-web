<template>
    <div>
        <top></top>
<!--        <qa-home></qa-home>-->
        <router-view v-bind:questions="questions" v-bind:qa="qa"></router-view>
    </div>
</template>

<script>

    import Top from "components/common/Top";
    import QaDetails from "./QaDetails";
    import QaHome from "./QaHome";

    import {findQa, findQaById} from "../../network/qa";

    export default {
        name: "Qa",
        components: {
            Top,
            QaDetails,
            QaHome,
        },
        data(){
            return {
                questions: [],
                qa: {}
            }
        },
        created() {
            if(this.$route.path === '/qa'){
                findQa().then(res => {
                    this.questions = [...res.data]
                }).catch(err => {
                    console.log(err)
                })
            }else if(this.$route.path === '/qa/details'){
                findQaById(this.$route.query.id).then(res => {
                    this.qa = res.data
                }).catch(err => {
                    console.log(err);
                })
            }
        },
        methods: {

        }

    }
</script>

<style scoped>

</style>