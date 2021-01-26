<template>
  <div class="page_body">
    <div class="page_container">
      <div class="header">
        <head-nav-bar></head-nav-bar>
      </div>
      <div class="side_bar">
        <side-bar :my-message="myMessage" @listen-side-bar="handlerSideBarMsg"></side-bar>
      </div>
      <!-- 动态渲染组件 -->
      <div class="main">
        <router-view :key="cptKey">
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
import { computed, reactive, toRefs } from 'vue'
import { useRoute } from 'vue-router'
import SideBar from '../../components/SideBar.vue'
import FootNavBar from '../../components/FootNavBar.vue'
import HeadNavBar from '../../components/HeadNavBar.vue'
import Home from '../Home.vue'
import ProxyMng from '../config/ProxyMng.vue'
import TaskMng from '../config/TaskMng.vue'
import ServiceMng from '../config/ServiceMng.vue'
import ProxyMsg from '../message/ProxyMsg.vue'
import TaskMsg from '../message/TaskMsg.vue'
import ServiceMsg from '../message/ServiceMsg.vue'

export default {
  components: { SideBar, FootNavBar, HeadNavBar, Home, ProxyMng, TaskMng, ServiceMng, ProxyMsg, TaskMsg, ServiceMsg },
  name: 'Layout',
  setup() {
    // 处理SideBar子组件传递的事件
    const handlerSideBarMsg = (args) => {
      console.log('get message from sideBar:', args.name, args.msg)
    }
    // 处理FooterNavBar子组件传递的事件
    const handlerFooterNavBarMsg = (args) => {
      console.log('get message from footer: ', args.name, args.msg)
    }
    const state = reactive({
      // 定义一个变量传递给子组件的props
      myMessage: 'i is father components',
      componentName: 'Home'
    })
    const route = useRoute()
    // 根据路由变化动态加载相应的组件
    const cptKey = computed(() => {
      if (route.path === '/home') {
        state.componentName = 'Home'
      } else if (route.path === '/config/proxyMng') {
        state.componentName = 'ProxyMng'
      } else if (route.path === '/config/taskMng') {
        state.componentName = 'TaskMng'
      } else if (route.path === '/config/serviceMng') {
        state.componentName = 'ServiceMng'
      } else if (route.path === '/message/proxyMsg') {
        state.componentName = 'ProxyMsg'
      } else if (route.path === '/message/taskMsg') {
        state.componentName = 'TaskMsg'
      } else if (route.path === '/message/serviceMsg') {
        state.componentName = 'ServiceMsg'
      }
      return route.path + Math.random()
    })
    return {
      ...toRefs(state), handlerSideBarMsg, handlerFooterNavBarMsg, cptKey
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
