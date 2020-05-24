<template>
   <div>
       <top></top>
       <el-container class="main">
           <el-aside width="200px">
               <el-menu default-active="1" class="el-menu-vertical-demo menu" @select="handleSelect">
                   <el-menu-item index="/user/info">
                       <i class="el-icon-user"></i>
                       <span slot="title">用户管理</span>
                   </el-menu-item>
                   <el-menu-item index="/user/article">
                       <i class="el-icon-document"></i>
                       <span slot="title">文章管理</span>
                   </el-menu-item>
                   <el-menu-item index="/user/qa">
                       <i class="el-icon-question"></i>
                       <span slot="title">问题管理</span>
                   </el-menu-item>
                   <el-menu-item index="/user/soft">
                       <i class="el-icon-folder"></i>
                       <span slot="title">软件管理</span>
                   </el-menu-item>
               </el-menu>
           </el-aside>
           <el-main>
               <router-view v-bind:articles="articles"></router-view>
           </el-main>
       </el-container>
   </div>
</template>

<script>
    import Top from "../../components/common/Top";
    import UserMsg from "./UserMsg";
    import {findUserArticle} from "../../network/user";
    import {checkLogin} from "../../network/login";

    export default {
        name: "User",
        components: {
            Top,
            UserMsg
        },
        methods: {
            handleSelect(index){
                let token = window.sessionStorage.getItem("token")
                if(token == null){
                    this.$confirm('需要登录才能进行该操作, 是否跳转至登录页面?', '提示', {
                        confirmButtonText: '确定',
                        cancelButtonText: '取消',
                        type: 'info'
                    }).then(() => {
                        this.$router.push("/login")
                    }).catch(() => {
                        console.log("取消跳转");
                    });
                }else {
                    checkLogin(token).then(res => {
                        if(res.flag == true && res.code == 2000){
                            if(index === "/user/article"){
                                findUserArticle(JSON.parse(window.sessionStorage.getItem("user")).id)
                                    .then(res => {
                                        this.articles = res.data
                                        if(this.$route.path != index){
                                            this.$router.push(index)
                                        }
                                    }).catch(err => {
                                    console.log(err);
                                })
                            }else if(index === "/user/info"){
                                if(this.$route.path != index){
                                    this.$router.push(index)
                                }
                            }else if(index === "/user/qa"){

                            }else if(index === "/user/soft"){

                            }
                        }else if(res.flag == false && res.code == 2004){
                            this.$confirm('您的登录已超时, 是否跳转至登录页面?', '提示', {
                                confirmButtonText: '确定',
                                cancelButtonText: '取消',
                                type: 'info'
                            }).then(() => {
                                this.$router.push("/login")
                            }).catch(() => {
                                console.log("取消跳转");
                            });
                        }else {
                            this.$confirm('您的登录信息有误, 是否跳转至登录页面?', '提示', {
                                confirmButtonText: '确定',
                                cancelButtonText: '取消',
                                type: 'info'
                            }).then(() => {
                                this.$router.push("/login")
                            }).catch(() => {
                                console.log("取消跳转");
                            });
                        }
                    }).catch(err => {
                        console.log(err);
                    })
                }
            },
        },
        data() {
           return {
               articles: []
           }
        }
    }
</script>

<style scoped>
    .main{
        width: 70%;
        margin-left: 15%;
        margin-top: 20px;
        background-color: #606266;
        min-height: 500px;
    }
    .menu{
        /*min-height: 500px;*/
        height: 100%;
    }
</style>