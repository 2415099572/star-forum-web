<template>
    <div class="main">
        <el-form :model="form" label-width="220px"class="form" :rules="rules" ref="form">
            <el-form-item label-width="0" prop="filename">
                <el-input placeholder="请输入文件名" v-model="form.filename" clearable maxlength="100" class="title">
                </el-input>
            </el-form-item>
            <el-form-item label-width="0" prop="dynamicTags">
                <el-select v-model="form.dynamicTags" multiple placeholder="请选择文章标签" filterable class="tag" :multiple-limit="5">
                    <el-option
                            v-for="item in tags"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                    </el-option>
                </el-select>
            </el-form-item>
            <el-form-item label-width="0">
                <div class="content">
                    <mavon-editor v-model="content" :toolbars="toolbars" class="editor" placeholder="请输入文件描述..."/>
                </div>
            </el-form-item>
            <el-form-item label-width="0">
                <el-upload class="upload-demo" ref="upload" :action="uploadUrl" :before-upload="handleBeforeUpload" :auto-upload="false" name="files" :data="soft"
                           :on-error="handleUploadError" :before-remove="beforeRemove" multiple :limit="5" :on-exceed="handleExceed" :on-success="handleSucess" :file-list="fileList">
                    <el-button size="small" type="primary" slot="trigger">选取文件</el-button>
                    <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">上传到服务器</el-button>
                    <div slot="tip" class="el-upload__tip">一次传输单个文件小于2GB，总文件小于10GB</div>
                </el-upload>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    import {mavonEditor} from "mavon-editor";
    import "mavon-editor/dist/css/index.css";
    import {checkLogin} from "../../network/login";
    export default {
        name: "SoftUpload",
        components: {
            mavonEditor
        },
        data(){
            return {
                form: {
                    fileName: '',
                    dynamicTags: [],
                },
                uploadUrl: 'http://localhost:9005/soft/upload',
                fileList: [],
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
                content:'',
                soft: {
                    name: '',
                    describe: '',
                    labelId: '',
                    userId: '',
                    nickname: ''
                },
                rules: {
                    filename: [
                        { required: true, message: '请输入文件名', trigger: 'blur' },
                        { min: 1, max: 50, message: '长度在 1 到 50 个字符', trigger: 'blur' }
                    ],
                    dynamicTags: [
                        { required: true, message: '请选择文章标签', trigger: 'change' }
                    ]
                }
            }
        },
        methods:{
            handleExceed(files, fileList) {
                this.$message.warning(`当前限制选择 5 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
            },
            beforeRemove(file, fileList) {
                return this.$confirm(`确定移除 ${ file.name }？`);
            },
            handleUploadError(error, file) {

                this.$notify.error({
                    title: 'error',
                    message: '上传出错:' +  error,
                    type: 'error',
                    position: 'top-right'
                })
            },

            handleBeforeUpload(file){

            },
            submitUpload(){
                this.$refs.form.validate().then(res => {
                    if(res){
                        this.soft.userId = JSON.parse(window.sessionStorage.getItem("user")).id
                        this.soft.nickname = JSON.parse( window.sessionStorage.getItem("user")).nickName
                        this.soft.name = this.form.filename
                        this.soft.describe = this.content
                        this.soft.labelId = this.form.dynamicTags
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
                                    this.$refs.upload.submit()
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
                    }
                })

            },
            handleSucess(response, file, fileList){
                this.content = ''
                this.form.filename = ''
                this.form.dynamicTags = []
                this.$refs.upload.clearFiles()
            }
        }
    }
</script>

<style scoped>
    .main{
        width: 70%;
        margin-left: 15%;
        min-height: 300px;
        margin-top: 40px;
    }
    .form{
        width: 90%;
        margin-left: 10%;
    }
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
    .upload-demo{
        width: 42%;
        margin-left: 29%;
        text-align: center;
        margin-top: 30px;
    }
</style>