<template>
  <div class="table_data">
    <table class="table table-sm table-dark">
      <thead>
        <tr>
        <th scope="col">#</th>
        <th scope="col">标题</th>
        <th scope="col">内容</th>
        <th scope="col">等级</th>
        <th scope="col">时间</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in tableDatas" :key="index">
        <th scope="row">{{ item.id }}</th>
        <td>{{ item.title }}</td>
        <td>{{ item.content }}</td>
        <td>{{ item.u_time }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { reactive, toRefs } from 'vue'
export default {
  name: 'ServiceMsg',
  emits: [],
  props: {},
  setup(props, { emit }) {
    const state = reactive({
      tableDatas: [
        { id: 1, title: '提示消息', content: 'service start success', u_time: '2021-01-26 10:10:10' }
      ]
    })
    return {
      ...toRefs(state)
    }
  }
}
</script>

<style scoped>
</style>
