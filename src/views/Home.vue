<template>
    <div>
      <div class="table_data">
        <table class="table table-sm table-dark">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">First</th>
              <th scope="col">Last</th>
              <th scope="col">Handle</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in tableDatas" :key="index">
              <th scope="row">{{ item.id }}</th>
              <td>{{ item.first }}</td>
              <td>{{ item.last }}</td>
              <td>{{ item.handler }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
</template>

<script>

import { reactive, toRefs } from 'vue'

export default {
  name: 'Home',
  props: {},
  emits: [],
  setup(props, { emit }) {
    const state = reactive({
      tableDatas: [
        { id: 1, first: 'Mark', last: 'Otto', handler: '@mdo' },
        { id: 2, first: 'Jacob', last: 'Thornton', handler: '@fat' },
        { id: 3, first: 'Mark', last: 'Otto', handler: '@mdo' },
        { id: 4, first: 'Jacob', last: 'Thornton', handler: '@fat' },
        { id: 5, first: 'Mark', last: 'Otto', handler: '@mdo' },
        { id: 6, first: 'Jacob', last: 'Thornton', handler: '@fat' },
        { id: 7, first: 'Mark', last: 'Otto', handler: '@mdo' },
        { id: 8, first: 'Jacob', last: 'Thornton', handler: '@fat' },
        { id: 9, first: 'Mark', last: 'Otto', handler: '@mdo' },
        { id: 10, first: 'Jacob', last: 'Thornton', handler: '@fat' }
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
