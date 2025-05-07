<template>
  <div class="login-container">
    <div class="login-box">
      <div class="login-title">
        <img src="../assets/logo.svg" alt="Logo" />
        <h1>后台管理系统1</h1>
      </div>
      <a-form
        :model="formState"
        name="login"
        @finish="onFinish"
        autocomplete="off"
      >
        <a-form-item
          name="username"
          :rules="[{ required: true, message: '请输入用户名' }]"
        >
          <a-input v-model:value="formState.username" placeholder="用户名">
            <template #prefix>
              <user-outlined />
            </template>
          </a-input>
        </a-form-item>

        <a-form-item
          name="password"
          :rules="[{ required: true, message: '请输入密码' }]"
        >
          <a-input-password v-model:value="formState.password" placeholder="密码">
            <template #prefix>
              <lock-outlined />
            </template>
          </a-input-password>
        </a-form-item>

        <a-form-item>
          <a-button type="primary" html-type="submit" block>
            登录
          </a-button>
        </a-form-item>
      </a-form>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
import { message } from 'ant-design-vue'
import { UserOutlined, LockOutlined } from '@ant-design/icons-vue'

const router = useRouter()
const formState = reactive({
  username: '',
  password: ''
})

const onFinish = (values: any) => {
  // 这里应该调用实际的登录 API
  if (values.username === 'admin' && values.password === 'admin') {
    localStorage.setItem('token', 'dummy-token')
    message.success('登录成功')
    router.push('/')
  } else {
    message.error('用户名或密码错误')
  }
}
</script>

<style scoped>
.login-container {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f0f2f5;
  padding: 16px;
}

.login-box {
  width: 100%;
  max-width: 400px;
  padding: 40px;
  background: white;
  border-radius: 4px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
}

.login-title {
  text-align: center;
  margin-bottom: 40px;
}

.login-title img {
  width: 64px;
  height: 64px;
  margin-bottom: 16px;
}

.login-title h1 {
  font-size: 24px;
  color: rgba(0, 0, 0, 0.85);
  margin: 0;
}

@media screen and (max-width: 576px) {
  .login-box {
    padding: 24px;
  }

  .login-title img {
    width: 48px;
    height: 48px;
  }

  .login-title h1 {
    font-size: 20px;
  }
}
</style> 