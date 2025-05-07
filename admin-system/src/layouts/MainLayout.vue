<template>
  <a-layout class="layout">
    <a-layout-sider
      v-model:collapsed="collapsed"
      :trigger="null"
      collapsible
      :breakpoint="'lg'"
      :collapsedWidth="0"
      :width="256"
      class="layout-sider"
    >
      <div class="logo">
        <img src="../assets/logo.svg" alt="Logo" />
        <span v-if="!collapsed">后台管理系统</span>
      </div>
      <a-menu
        v-model:selectedKeys="selectedKeys"
        theme="dark"
        mode="inline"
      >
        <a-menu-item key="1">
          <template #icon>
            <dashboard-outlined />
          </template>
          <span>仪表盘</span>
        </a-menu-item>
        <a-menu-item key="2">
          <template #icon>
            <user-outlined />
          </template>
          <span>用户管理</span>
        </a-menu-item>
        <a-menu-item key="3">
          <template #icon>
            <setting-outlined />
          </template>
          <span>系统设置</span>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header class="header">
        <menu-unfold-outlined
          v-if="collapsed"
          class="trigger"
          @click="() => (collapsed = !collapsed)"
        />
        <menu-fold-outlined
          v-else
          class="trigger"
          @click="() => (collapsed = !collapsed)"
        />
        <div class="header-right">
          <a-dropdown>
            <a class="user-dropdown" @click.prevent>
              <a-avatar>
                <template #icon><user-outlined /></template>
              </a-avatar>
              <span class="username">管理员</span>
            </a>
            <template #overlay>
              <a-menu>
                <a-menu-item key="0">
                  <user-outlined />
                  个人信息
                </a-menu-item>
                <a-menu-item key="1">
                  <setting-outlined />
                  设置
                </a-menu-item>
                <a-menu-divider />
                <a-menu-item key="3" @click="handleLogout">
                  <logout-outlined />
                  退出登录
                </a-menu-item>
              </a-menu>
            </template>
          </a-dropdown>
        </div>
      </a-layout-header>
      <a-layout-content class="content">
        <router-view></router-view>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script lang="ts" setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  DashboardOutlined,
  UserOutlined,
  SettingOutlined,
  LogoutOutlined
} from '@ant-design/icons-vue'

const router = useRouter()
const collapsed = ref(false)
const selectedKeys = ref(['1'])
const isMobile = ref(false)

const checkMobile = () => {
  isMobile.value = window.innerWidth < 992
  if (isMobile.value) {
    collapsed.value = true
  }
}

onMounted(() => {
  checkMobile()
  window.addEventListener('resize', checkMobile)
})

onUnmounted(() => {
  window.removeEventListener('resize', checkMobile)
})

const handleLogout = () => {
  localStorage.removeItem('token')
  router.push('/login')
}
</script>

<style scoped>
.layout {
  min-height: 100vh;
}

.layout-sider {
  position: fixed;
  height: 100vh;
  left: 0;
  top: 0;
  z-index: 1000;
}

.logo {
  height: 64px;
  padding: 16px;
  display: flex;
  align-items: center;
  background: #002140;
}

.logo img {
  height: 32px;
  margin-right: 8px;
}

.logo span {
  color: white;
  font-size: 16px;
  font-weight: bold;
}

.header {
  background: #fff;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  width: 100%;
  z-index: 999;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
}

.trigger {
  font-size: 18px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}

.trigger:hover {
  color: #1890ff;
}

.header-right {
  padding-right: 24px;
}

.user-dropdown {
  display: flex;
  align-items: center;
  cursor: pointer;
}

.username {
  margin-left: 8px;
  color: rgba(0, 0, 0, 0.85);
}

.content {
  margin: 64px 16px 16px;
  padding: 24px;
  background: #fff;
  min-height: 280px;
  transition: all 0.2s;
}

@media screen and (max-width: 992px) {
  .content {
    margin-left: 0;
  }
  
  .header {
    padding-left: 0;
  }
  
  .username {
    display: none;
  }
}
</style> 