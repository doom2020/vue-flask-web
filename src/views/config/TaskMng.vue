<template>
  <div class="table_data">
    <table class="table table-sm table-dark">
    <thead>
      <tr>
      <th scope="col">#</th>
      <th scope="col">任务名称</th>
      <th scope="col">任务参数</th>
      <th scope="col">任务开始时间</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item, index) in tableDatas" :key="index">
      <th scope="row">{{ item.id }}</th>
      <td>{{ item.task_name }}</td>
      <td>{{ item.task_params }}</td>
      <td>{{ item.begin_time }}</td>
      </tr>
    </tbody>
    </table>
  </div>
</template>
<script>
import { reactive, toRefs } from 'vue'
export default {
  components: {},
  name: 'TaskMng',
  setup() {
    const state = reactive({
      tableDatas: [
        { id: 1, task_name: '测试任务', task_params: '{id: 1, count: 10, max: 100}', begin_time: '2021-01-25 17:20:00' }
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
