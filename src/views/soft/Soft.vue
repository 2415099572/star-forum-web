<template>
    <div>
        <top></top>
        <router-view v-bind:softs="softs" v-bind:softDetails="softDetails" @download="downloadS"></router-view>
    </div>
</template>

<script>

    import Top from "components/common/Top"
    import SoftDetails from "./SoftDetails";
    import SoftHome from "./SoftHome";
    import SoftUpload from "./SoftUpload";

    import {findSoft, findSoftById, downloadSoft} from "../../network/soft";

    export default {
        name: "Soft",
        components: {
            Top,
            SoftDetails,
            SoftHome,
            SoftUpload
        },
        data(){
            return {
                activeName: "0",
                softs: [],
                softDetails: {}
            }
        },
        methods: {
            handleClick(){

            },
            downloadS(name){
                downloadSoft(name).then(res => {
                    console.log(res);
                }).catch(err => {
                    console.log(err);
                })
            }
        },
        created() {
            if(this.$route.path === '/soft' || this.$route.path === '/soft/'){
                findSoft().then(res => {
                    this.softs = res.data
                }).catch(err => {
                    console.log(err);
                })
            }else if(this.$route.path === '/soft/details' || this.$route.path === '/soft/details/'){
                findSoftById(this.$route.query.id).then(res => {
                    this.softDetails = res.data
                }).catch(err => {
                    console.log(err);
                })
            }
        }
    }
</script>

<style scoped>

</style>