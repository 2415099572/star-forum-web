<template>
    <div>
        <top></top>
<!--        <qa-home></qa-home>-->
        <router-view v-bind:questions="questions" @sendQaId="getQaId"></router-view>
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
                questions: []
            }
        },
        created() {
            if(this.$route.path === '/qa'){
                findQa().then(res => {
                    this.questions = [...res.data]
                }).catch(err => {
                    console.log(err)
                })
            }
        },
        methods: {
            getQaId: function (data) {
                findQaById(data).then(res => {
                    let url = this.$router.resolve({
                        path: "/qa/details",
                        query: {
                            qaDetails: JSON.stringify(res.data)
                        }
                    })
                    window.open(url.href, "_blank")
                }).catch(err => {
                    console.log(err)
                })
            }
        }

    }
</script>

<style scoped>

</style>