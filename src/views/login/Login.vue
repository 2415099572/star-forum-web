<template>
    <div class="login_box">
        <div class="logo">
            <img src="~assets/img/header/star_logo.png">
        </div>
        <el-form ref="form" :rules="rules" :model="formData" label-width="0px" class="login_form">
            <el-form-item prop="mobile">
                <el-input v-model="formData.mobile" placeholder="手机号" prefix-icon="iconfont icondenglu"></el-input>
            </el-form-item>
            <el-form-item prop="password">
                <el-input v-model="formData.password" placeholder="密  码" type="password" prefix-icon="iconfont iconmima"></el-input>
            </el-form-item>
            <el-form-item class="btns">
                <el-button type="primary" @click="login">登录</el-button>
                <el-button type="primary" plain>注册</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    import {userLogin} from "network/login";

    export default {
        name: "Login",
        data(){
            return {
                formData:{
                    mobile: '13712341234',
                    password: '123456'
                },
                rules:{
                    mobile: [
                        { required: true, message: '请输入用户名', trigger: 'blur' },
                        { min: 3, max: 11, message: '长度在 3 到 11 个字符', trigger: 'blur' }
                    ],
                    password: [
                        { required: true, message: '请输入密码', trigger: 'blur' },
                        { min: 6, max: 18, message: '长度在 6 到 18 个字符', trigger: 'blur' }
                    ]
                }
            }
        },
        methods:{
            login(){
                this.$refs.form.validate(valid => {
                    if(!valid) return;
                    userLogin(this.formData.mobile, this.formData.password)
                        .then(res => {
                            if(res.flag == true && res.code == 2000){
                                this.$message({
                                    message: "登录成功",
                                    type: "success"
                                })
                                window.sessionStorage.setItem("token", res.data.token)
                                window.sessionStorage.setItem("user", JSON.stringify(res.data.user))
                                this.$router.go(-1)
                            }else {
                                this.$message.error("账号或密码错误")
                            }
                        })
                        .catch(err =>{
                            console.log(err)
                        })
                })
            }
        }
    }
</script>

<style scoped>
    .login_box{
        width: 450px;
        height: 300px;
        background-color: #333333;
        border-radius: 5px;
        padding-left: 20px;
        padding-right: 20px;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);

        display: flex;
        flex-direction: column;
        justify-content: space-around;
    }

    .logo{
        width: 80px;
        height: 80px;

    }

    .logo img{
        width: 100%;
        height: 100%;
    }

    .login_form{
        width: 100%;
    }

    .btns{
        display: flex;
        justify-content: flex-end;
    }

</style>