<template>
  <div class="table_data">
    <table class="table table-sm table-dark">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">IP</th>
          <th scope="col">端口</th>
          <th scope="col">区域</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in tableDatas" :key="index">
          <th scope="row">{{ item.id }}</th>
          <td>{{ item.ip }}</td>
          <td>{{ item.port }}</td>
          <td>{{ item.area }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
import { reactive, toRefs } from 'vue'

export default {
  components: {},
  name: 'ProxyMng',
  setup() {
    const state = reactive({
      tableDatas: [
        { id: 1, ip: '10.112.113.14', port: 9999, area: '湖北省武汉市' }
      ]
    })
    return {
      ...toRefs(state)
    }
  }
}
</script>
<style scoped>
</style>>
