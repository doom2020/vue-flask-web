<template>
  <div class="table_data">
    <table class="table table-sm table-dark">
      <thead>
        <tr>
        <th scope="col">#</th>
        <th scope="col">服务名称</th>
        <th scope="col">ip地址</th>
        <th scope="col">更新时间</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in tableDatas" :key="index">
        <th scope="row">{{ item.id }}</th>
        <td>{{ item.service_name }}</td>
        <td>{{ item.ip }}</td>
        <td>{{ item.u_time }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
import { reactive, toRefs } from 'vue'
export default {
  components: {},
  name: 'ServiceMng',
  setup() {
    const state = reactive({
      tableDatas: [
        { id: 1, service_name: '消息微服务', ip: '10.112.113.14', u_time: '2021-01-25 17:11:11' }
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
