<template>
  <div class="page_body">
    <div class="page_container">
      <div class="header">
        <head-nav-bar></head-nav-bar>
      </div>
      <div class="side_bar">
        <side-bar :my-message="myMessage" :first-menu-list="firstMenuList" @listen-side-bar="handlerSideBarMsg"></side-bar>
      </div>
      <div class="main"></div>
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
      firstMenuList: [
        {
          name: '配置中心',
          classIconLeft: 'bi bi-gear-fill',
          dIconLeft: 'M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 0 0-5.86 2.929 2.929 0 0 0 0 5.858z',
          classIconRight: 'bi bi-chevron-double-right',
          dIconRight: 'M3.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L9.293 8 3.646 2.354a.5.5 0 0 1 0-.708z'
        },
        {
          name: '消息中心',
          classIconLeft: 'bi bi-menu-up',
          dIconLeft: 'M7.646 15.854a.5.5 0 0 0 .708 0L10.207 14H14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h3.793l1.853 1.854zM1 9V6h14v3H1zm14 1v2a1 1 0 0 1-1 1h-3.793a1 1 0 0 0-.707.293l-1.5 1.5-1.5-1.5A1 1 0 0 0 5.793 13H2a1 1 0 0 1-1-1v-2h14zm0-5H1V3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v2zM2 11.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 0-1h-8a.5.5 0 0 0-.5.5zm0-4a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 0-1h-11a.5.5 0 0 0-.5.5zm0-4a.5.5 0 0 0 .5.5h6a.5.5 0 0 0 0-1h-6a.5.5 0 0 0-.5.5z',
          classIconRight: 'bi bi-menu-up',
          dIconRight: 'M3.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L9.293 8 3.646 2.354a.5.5 0 0 1 0-.708z'
        }
      ],
      myMessage: 'i is father components'
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
  .footer {
    position: fixed;
    left: 0;
    bottom: 0;
    right: 0;
    height: 50px;
    background-color: #e3f2fd;
  }
</style>
