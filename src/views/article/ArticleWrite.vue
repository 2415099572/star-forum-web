<template>
    <div class="write">
        <el-input placeholder="请输文章标题" v-model="title" clearable maxlength="100" class="title">
        </el-input>
        <el-select v-model="dynamicTags" multiple placeholder="请选择文章标签" filterable class="tag" :multiple-limit="5">
            <el-option
                    v-for="item in tags"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
            </el-option>
        </el-select>
        <div class="content">
            <mavon-editor v-model="content" :toolbars="toolbars" class="editor"/>
        </div>
        <div class="tar">
            <el-button type="primary" icon="el-icon-check" @click="save">保  存</el-button>
            <el-button type="primary" icon="el-icon-tickets" @click="publish">发  表</el-button>
        </div>
    </div>
</template>

<script>
    import {mavonEditor} from "mavon-editor";
    import "mavon-editor/dist/css/index.css";
    import {checkLogin} from "../../network/login";
    export default {
        name: "ArticleWrite",
        components: {
            mavonEditor
        },
        data() {
            return {
                title: "",
                content: "",
                toolbars: {
                    bold:        true, // 粗体
                    italic:      true, // 斜体
                    header:      true, // 标题
                    underline:   true, // 下划线
                    mark:        true, // 标记
                    superscript: true, // 上角标
                    quote:       true, // 引用
                    ol:          true, // 有序列表
                    link:        true, // 链接
                    imagelink:   true, // 图片链接
                    help:        true, // 帮助
                    code:        true, // code
                    subfield:    true, // 是否需要分栏
                    fullscreen:  true, // 全屏编辑
                    readmodel:   true, // 沉浸式阅读
                    undo:        true, // 上一步
                    trash:       true, // 清空
                    save:        true, // 保存（触发events中的save事件）
                    navigation:  true // 导航目录
                },
                tags: [
                    {
                        value: '1',
                        label: 'Java'
                    }, {
                        value: '2',
                        label: 'Python'
                    }, {
                        value: '3',
                        label: 'C++'
                    }, {
                        value: '4',
                        label: 'C'
                    }, {
                        value: '5',
                        label: 'JavaScript'
                    }, {
                        value: '6',
                        label: '其他'
                    },
                ],
                dynamicTags: [],
            }
        },
        methods: {
            save(){
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
                            this.$message({
                                message: '保存成功',
                                type: 'success'
                            });
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

            publish(){
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
                            this.$message({
                                message: '发表成功',
                                type: 'success'
                            });
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
            publish(){
                console.log(this.content)
            },

        }
    }
</script>

<style scoped>
    .write{
        background-color: rgb(229, 233, 242);
        width: 70%;
        margin-left: 15%;
        margin-top: 20px;
        padding-top: 10px;
        min-height: 250px;
    }
    .title{
        width: 90%;
        margin-left: 5%;
    }
    .content{
        width: 90%;
        margin-left: 5%;
    }
    .editor{
        min-height: 500px;
    }
    .tag{
        width: 90%;
        margin-left: 5%;
        margin-top: 10px;
        margin-bottom: 10px;
    }
    .tar{
        width: 20%;
        margin-left: 75%;
        margin-top: 30px;
    }
</style>