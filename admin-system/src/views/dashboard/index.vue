<template>
  <div class="dashboard">
    <a-row :gutter="[16, 16]">
      <a-col :xs="24" :sm="12" :md="12" :lg="6" :xl="6">
        <a-card>
          <template #title>
            <user-outlined />
            用户总数
          </template>
          <div class="card-content">
            <span class="number">1,234</span>
            <span class="label">总用户数</span>
          </div>
        </a-card>
      </a-col>
      <a-col :xs="24" :sm="12" :md="12" :lg="6" :xl="6">
        <a-card>
          <template #title>
            <shopping-cart-outlined />
            订单总数
          </template>
          <div class="card-content">
            <span class="number">856</span>
            <span class="label">总订单数</span>
          </div>
        </a-card>
      </a-col>
      <a-col :xs="24" :sm="12" :md="12" :lg="6" :xl="6">
        <a-card>
          <template #title>
            <dollar-outlined />
            销售额
          </template>
          <div class="card-content">
            <span class="number">¥45,678</span>
            <span class="label">总销售额</span>
          </div>
        </a-card>
      </a-col>
      <a-col :xs="24" :sm="12" :md="12" :lg="6" :xl="6">
        <a-card>
          <template #title>
            <rise-outlined />
            增长率
          </template>
          <div class="card-content">
            <span class="number">12.5%</span>
            <span class="label">月增长率</span>
          </div>
        </a-card>
      </a-col>
    </a-row>

    <a-row :gutter="[16, 16]" style="margin-top: 16px">
      <a-col :xs="24" :lg="12">
        <a-card title="最近订单" :bordered="false">
          <a-table
            :columns="columns"
            :data-source="data"
            :pagination="false"
            :scroll="{ x: true }"
          >
            <template #bodyCell="{ column, record }">
              <template v-if="column.key === 'status'">
                <a-tag :color="record.status === '已完成' ? 'green' : 'blue'">
                  {{ record.status }}
                </a-tag>
              </template>
            </template>
          </a-table>
        </a-card>
      </a-col>
      <a-col :xs="24" :lg="12">
        <a-card title="系统公告" :bordered="false">
          <a-list
            :data-source="notices"
            :pagination="false"
            :split="false"
          >
            <template #renderItem="{ item }">
              <a-list-item>
                <a-list-item-meta>
                  <template #title>{{ item.title }}</template>
                  <template #description>{{ item.date }}</template>
                </a-list-item-meta>
              </a-list-item>
            </template>
          </a-list>
        </a-card>
      </a-col>
    </a-row>
  </div>
</template>

<script lang="ts" setup>
import {
  UserOutlined,
  ShoppingCartOutlined,
  DollarOutlined,
  RiseOutlined
} from '@ant-design/icons-vue'

const columns = [
  {
    title: '订单号',
    dataIndex: 'id',
    key: 'id',
    width: 120
  },
  {
    title: '客户',
    dataIndex: 'customer',
    key: 'customer',
    width: 120
  },
  {
    title: '金额',
    dataIndex: 'amount',
    key: 'amount',
    width: 120
  },
  {
    title: '状态',
    dataIndex: 'status',
    key: 'status',
    width: 120
  }
]

const data = [
  {
    key: '1',
    id: 'ORD-001',
    customer: '张三',
    amount: '¥1,234',
    status: '已完成'
  },
  {
    key: '2',
    id: 'ORD-002',
    customer: '李四',
    amount: '¥2,345',
    status: '处理中'
  },
  {
    key: '3',
    id: 'ORD-003',
    customer: '王五',
    amount: '¥3,456',
    status: '已完成'
  }
]

const notices = [
  {
    title: '系统升级通知',
    date: '2024-01-15'
  },
  {
    title: '新功能发布公告',
    date: '2024-01-10'
  },
  {
    title: '安全更新提醒',
    date: '2024-01-05'
  }
]
</script>

<style scoped>
.dashboard {
  padding: 0;
}

.card-content {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.number {
  font-size: 24px;
  font-weight: bold;
  color: #1890ff;
}

.label {
  margin-top: 8px;
  color: rgba(0, 0, 0, 0.45);
}

@media screen and (max-width: 576px) {
  .dashboard {
    padding: 0;
  }
  
  .number {
    font-size: 20px;
  }
  
  .label {
    font-size: 12px;
  }
}
</style> 