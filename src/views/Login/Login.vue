<template>
  <van-form @submit="submitForm" @failed="onFailed" ref="ruleFormRef" :model="form">
    <van-cell-group>
      <van-field 
        v-model="form.username" 
        label="账号：" 
        placeholder="请输入账号" 
        clearable
        name="username"
        :rules="usernameRules"
      ></van-field>
    </van-cell-group>
    <van-cell-group> 
      <van-field 
        v-model="form.password" 
        label="密码：" 
        placeholder="请输入密码" 
        name="password"
        clearable
        type="password"
        :rules="passwordRules"
      ></van-field> 
    </van-cell-group>
    <van-cell-group>
      <van-button block round type="primary" native-type="submit">登录</van-button>
    </van-cell-group> 
  </van-form>
</template>

<script setup>
import { ref, reactive } from 'vue'
import useTokenStore from '@/stores/token'
import useUserStore from '@/stores/user'
import { useRouter } from 'vue-router'
import request from '@/utils/request'

const { updateToken } = useTokenStore()
const { updateUser } = useUserStore()
const router = useRouter()

const form = reactive({
  username: 'demo1',
  password: '123456'
})
const ruleFormRef = ref()

// 定义验证规则
const usernameRules = ref([
  { required: true, message: '用户名不能为空' },
  { pattern: /^\w{3,16}$/, message: '用户名长度为3-16个字符' }
])
const passwordRules = ref([
  { required: true, message: '密码不能为空' },
  { pattern: /^\w{6,24}$/, message: '密码必须为6-24位英文字母或数字' }
])
// 表单提交函数
const submitForm = async values => {
    console.log("***",values)
    // post 和 get
  const data = await request.post("/1.1/login",values)
  // const data = await request.get("/1.1/login",parmas:{{name:'zs'}})
  console.log("***",data)
  if (data) {
    updateToken(data.sessionToken)
    // const user = await getUser()
    updateUser({
      isLogin: true,
      username: data.username,
      avatar: ''
    })
    router.push({ name: 'user' })
  }
}
const onFailed = errorInfo => {
  console.log('failed', errorInfo)
}
</script>

<style lang="less" scoped>
button {
  position: fixed;
  top: 200px;
}

</style>