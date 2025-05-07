<template>
  <div class="dashboard">
    <a-row :gutter="16">
      <a-col :span="6">
        <a-card>
          <template #title>
            <user-outlined />
            用户总数
          </template>
          <h2>1,234</h2>
        </a-card>
      </a-col>
      <a-col :span="6">
        <a-card>
          <template #title>
            <shopping-outlined />
            订单总数
          </template>
          <h2>567</h2>
        </a-card>
      </a-col>
      <a-col :span="6">
        <a-card>
          <template #title>
            <dollar-outlined />
            总收入
          </template>
          <h2>¥89,432</h2>
        </a-card>
      </a-col>
      <a-col :span="6">
        <a-card>
          <template #title>
            <rise-outlined />
            增长率
          </template>
          <h2>12.5%</h2>
        </a-card>
      </a-col>
    </a-row>

    <a-row :gutter="16" style="margin-top: 16px">
      <a-col :span="12">
        <a-card title="最近订单">
          <a-table :columns="columns" :data-source="data" :pagination="false">
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
      <a-col :span="12">
        <a-card title="系统公告">
          <a-list :data-source="notices" :pagination="false">
            <template #renderItem="{ item }">
              <a-list-item>
                <a-list-item-meta :title="item.title">
                  <template #description>
                    {{ item.date }}
                  </template>
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
  ShoppingOutlined,
  DollarOutlined,
  RiseOutlined
} from '@ant-design/icons-vue'

const columns = [
  {
    title: '订单号',
    dataIndex: 'id',
    key: 'id'
  },
  {
    title: '客户',
    dataIndex: 'customer',
    key: 'customer'
  },
  {
    title: '金额',
    dataIndex: 'amount',
    key: 'amount'
  },
  {
    title: '状态',
    dataIndex: 'status',
    key: 'status'
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
  }
]

const notices = [
  {
    title: '系统维护通知',
    date: '2024-03-20'
  },
  {
    title: '新功能上线公告',
    date: '2024-03-19'
  }
]
</script>

<style scoped>
.dashboard {
  padding: 24px;
}

h2 {
  margin: 0;
  font-size: 24px;
  font-weight: 500;
}
</style> 