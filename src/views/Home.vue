<template>
  <div style="width: 100%">
    <nav class="navbar navbar-expand-lg navbar-light" style="position: fixed;top: 0;width: 100%;background-color: #e3f2fd;">
      <a class="navbar-brand" href="#">Navbar</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Link</a>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
          </li>
        </ul>
        <form class="form-inline my-2 my-lg-0" style="margin-right: 20px;">
          <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" style="width: 600px;">
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
        <ul class="navbar-nav" style="float: right;">
          <li class="nav-item">
            <span v-if="showUser" class="nav-link" style="color: #0000FF">{{ userInfo }}</span>
            <a v-else class="nav-link" href="#" @click="toLogin" style="color: #FF0033">{{ userInfo }}</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#" @click="toLogout">Logout</a>
          </li>
        </ul>
      </div>
    </nav>
    <side-bar :my-message="myMessage" :first-menu-list="firstMenuList" @tell="handlerSideBarMsg"></side-bar>
    <!-- <div style="width: 180px;flex:;position: fixed;top: 0;margin-top: 58px;overflow: auto;">
      <ul style="margin-bottom: 0;padding-left: 0;background-color: dimgrey;">
        <li v-for="(item, index) in firstMenuList" :key="index" class="firstMenu">
          <a href="#">
            <span>
              <svg width="1.5em" height="1.5em" viewBox="0 0 16 16" :class="item.classIconLeft" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" :d="item.dIconLeft"/>
              </svg>
            </span>
            <span style="margin-left: 10px;">{{ item.name }}</span>
            <span style="float: right;margin-right: 2px;">
              <svg width="1.5em" height="1.5em" viewBox="0 0 16 16" :class="item.classIconRight" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" :d="item.dIconRight"/>
              </svg>
            </span>
          </a>
        </li>
      </ul>
    </div> -->
    <nav class="navbar navbar-expand-lg navbar-light" style="position: fixed;bottom: 0;width: 100%;background-color: #e3f2fd;">
      <a class="navbar-brand" href="#" style="float: right">Version: 1.0.0.1</a>
    </nav>
  </div>
</template>
<script>
import { onMounted, reactive, ref, toRefs } from 'vue'
import { useRouter } from 'vue-router'
import SideBar from '../components/SideBar.vue'

// 1. 获取用户信息
function useGetUserInfo() {
  const userInfo = ref('')
  const showUser = ref(true)
  const getUserInfo = onMounted(() => {
    userInfo.value = sessionStorage.getItem('userInfo')
    if (!userInfo.value) {
      userInfo.value = '未登录'
    }
    if (userInfo.value === '未登录') {
      showUser.value = false
    } else {
      showUser.value = true
    }
  })
  return { getUserInfo, userInfo, showUser }
}

// 2. 退出登录
function useToLogout(router) {
  const toLogout = () => {
    // 清除缓存
    sessionStorage.clear()
    router.push({
      path: '/login'
    })
  }
  return toLogout
}
// 3. 到登录页面
function useToLogin(router) {
  const toLogin = () => {
    router.push({
      path: '/login'
    })
  }
  return toLogin
}
export default {
  components: { SideBar },
  name: 'Home',
  setup() {
    const { getUserInfo, userInfo, showUser } = useGetUserInfo()
    const router = useRouter()
    const toLogout = useToLogout(router)
    const toLogin = useToLogin(router)
    const handlerSideBarMsg = (args) => {
      console.log(args)
      console.log('get message:', args.name, args.msg)
    }
    const state = reactive({
      firstMenuList: [
        {
          name: '配置中心',
          classIconLeft: 'bi bi-gear-fill',
          dIconLeft: 'M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 0 0-5.86 2.929 2.929 0 0 0 0 5.858z',
          classIconRight: 'bi bi-chevron-double-right',
          dIconRight: 'M3.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L9.293 8 3.646 2.354a.5.5 0 0 1 0-.708z'
        }
      ],
      userInfo,
      showUser,
      myMessage: 'i is father components'
    })
    return {
      ...toRefs(state), toLogout, toLogin, getUserInfo, handlerSideBarMsg
    }
  }
}
</script>
<style>
  li{
    list-style: none;
  }
  .firstMenu{
    height: 36px;
    line-height: 36px;
    /* text-align: center; */
    background-color: dodgerblue;
    margin-bottom: 2px;
  }
  body{
    margin: 0;
    padding: 0;
  }
</style>
