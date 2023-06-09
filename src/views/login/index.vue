<template>
    <div class="login-container">
        <el-row>
            <el-col :span="15" :xs="0"></el-col>
            <el-col :span="9" :xs="24">
                <el-form class="login-form">
                    <h1>Hello</h1>
                    <h2>欢迎来到夜之城</h2>
                    <el-form-item>
                        <el-input :prefix-icon="User" size="default" v-model="loginFormData.username">
                            admin
                        </el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-input type="password" :prefix-icon="Lock" size="default" v-model="loginFormData.password">
                            111111
                        </el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button class="login-btn" type="info" plain>
                            登录
                        </el-button>
                    </el-form-item>
                </el-form>
            </el-col>
        </el-row>

    </div>
</template>

<script setup lang="ts">
import { Lock, User } from '@element-plus/icons-vue';
import { reactive } from 'vue';
let loginFormData = reactive({
    username: '',
    password: ''
})
</script>

<style scoped lang="scss">
.login-container {
    width: 100%;
    height: 100vh;
    background: url('@/assets/images/login-back.png') no-repeat;
    background-size: 750px;
    background-position: 40px;

}

h1 {
    font-size: 40px;
    font: bold;
    color: white;
}

h2 {
    font-size: 20px;
    font: bold;
    color: white;
    margin: 20px 0px;
}

.login-form {
    position: relative;
    background-color: #a1a4c3;
    width: 90%;
    top: 25vh;
    padding: 40px;
    border-radius: 20px;
    box-shadow: 15px 15px 6px #f3f2ef;
}

.login-btn {
    width: 100%
}
</style>