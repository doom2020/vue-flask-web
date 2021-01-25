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
        <router-view v-if="routerAlive">
          <keep-alive>
            <component :is="componentName" />
          </keep-alive>
        </router-view>
      </div>
      <div class="footer">
        <foot-nav-bar :my-message="myMessage" @listen-footer-bar="handlerFooterNavBarMsg"></foot-nav-bar>
      </div>
    </div>
  </div>
</template>
<script>
import { onActivated, onBeforeMount, onMounted, reactive, toRefs } from 'vue'
import SideBar from '../../components/SideBar.vue'
import FootNavBar from '../../components/FootNavBar.vue'
import HeadNavBar from '../../components/HeadNavBar.vue'
import Home from '../Home.vue'
import ProxyMng from '../config/ProxyMng.vue'
import TaskMng from '../config/TaskMng.vue'
import ServiceMng from '../config/ServiceMng.vue'
import { useRoute } from 'vue-router'

export default {
  components: { SideBar, FootNavBar, HeadNavBar, Home, ProxyMng, TaskMng, ServiceMng },
  name: 'Layout',
  setup() {
    console.log('222222222222222222222')
    onBeforeMount(() => {
      console.log('aaaaaaaaaaaaa')
    })
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
      // 定义一个传递给子组件的props
      myMessage: 'i is father components',
      componentName: 'Home',
      routerAlive: false
    })
    const route = useRoute()
    onMounted(() => {
      console.log('请求path: ', route.path)
      if (route.path === '/home') {
        state.componentName = 'Home'
        state.routerAlive = true
      } else if (route.path === '/config/proxyMng') {
        state.componentName = 'ProxyMng'
        state.routerAlive = true
      } else if (route.path === '/config/taskMng') {
        state.componentName = 'TaskMng'
        state.routerAlive = true
      } else if (route.path === '/config/serviceMng') {
        state.componentName = 'ServiceMng'
        state.routerAlive = true
      }
    })
    onActivated(() => {
      console.log('请求path: ', route.path)
      if (route.path === '/home') {
        state.componentName = 'Home'
        state.routerAlive = true
      } else if (route.path === '/config/proxyMng') {
        state.componentName = 'ProxyMng'
        state.routerAlive = true
      } else if (route.path === '/config/taskMng') {
        state.componentName = 'TaskMng'
        state.routerAlive = true
      } else if (route.path === '/config/serviceMng') {
        state.componentName = 'ServiceMng'
        state.routerAlive = true
      }
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
