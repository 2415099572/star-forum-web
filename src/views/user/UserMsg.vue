<template>
    <div class="main">
        <label class="label">密码修改</label>
        <el-input placeholder="请输入原密码" v-model="oldPwd" clearable class="input" show-password>
        </el-input>
        <el-input placeholder="请输入新密码" v-model="pwd" clearable class="input" show-password>
        </el-input>
        <el-input placeholder="请确认新密码" v-model="rePwd" clearable class="input" show-password>
        </el-input>
        <br/>
        <el-button type="primary" class="modify">修 改</el-button>
    </div>
</template>

<script>
    export default {
        name: "UserMsg",
        data() {
            return {
                oldPwd: '',
                pwd: '',
                rePwd: ''
            }
        }
    }
</script>

<style scoped>
    .main{
        width: 80%;
        background-color: #2B91D5;
        text-align: center;
        height: 100%;
    }
    .label{
        font-size: 20px;
        color: #909399;
        display: block;
    }
    .input{
        width: 70%;
        margin-top: 15px;
    }
    .modify{
        margin-top: 20px;
    }
</style>