<template>
  <div class="page_body">
    <div class="page_container">
      <div class="header">
        <head-nav-bar></head-nav-bar>
      </div>
      <div class="side_bar">
        <side-bar :my-message="myMessage" @listen-side-bar="handlerSideBarMsg"></side-bar>
      </div>
      <div class="main">
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
      <div class="footer">
        <foot-nav-bar :my-message="myMessage" @listen-footer-bar="handlerFooterNavBarMsg"></foot-nav-bar>
      </div>
    </div>
  </div>
</template>
<script>
import { reactive, toRefs } from 'vue'
import SideBar from '../components/SideBar.vue'
import FootNavBar from '../components/FootNavBar.vue'
import HeadNavBar from '../components/HeadNavBar.vue'

export default {
  components: { SideBar, FootNavBar, HeadNavBar },
  name: 'Home',
  setup() {
    // 处理SideBar子组件传递的事件
    const handlerSideBarMsg = (args) => {
      console.log('sideBar args', args)
      console.log('get message from sideBar:', args.name, args.msg)
    }
    // 处理FooterNavBar子组件传递的事件
    const handlerFooterNavBarMsg = (args) => {
      console.log('footer args: ', args)
      console.log('get message from footer: ', args.name, args.msg)
    }
    const state = reactive({
      myMessage: 'i is father components',
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
      ...toRefs(state), handlerSideBarMsg, handlerFooterNavBarMsg
    }
  }
}
</script>
<style>
  body {
    margin: 0;
    padding: 0;
  }
  .page_body {
    width: 100%;
  }
  .page_container {
    width: 100%;
  }
  .header {
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    height: 50px;
    background-color: #e3f2fd;
  }
  .side_bar {
    position: fixed;
    bottom: 52px;
    left: 0;
    top: 52px;
    width: 180px;
    background-color: #919191;
    overflow: auto;
  }
  .main {
    position: fixed;
    top: 52px;
    right: 0;
    bottom: 52px;
    left: 182px;
    background-color: #EAEAEA;
  }
  .table_data {
    padding: 10px;
  }
  .footer {
    position: fixed;
    left: 0;
    bottom: 0;
    right: 0;
    height: 50px;
    background-color: #e3f2fd;
  }
</style>
