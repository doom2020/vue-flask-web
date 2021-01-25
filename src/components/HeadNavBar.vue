<template>
  <div class="headNavBar">
    <div class="page_container">
      <a class="item_img" href="#"><img src="../assets/logo.png" style="height: 48px;width: 48px;" @click="toHomePage"></a>
      <a class="item_home" href="#" @click="toHomePage">Home</a>
      <input class="item_input" type="text" placeholder="Search。。">
      <button class="item_btn" type="button">Search</button>
      <span v-if="showUser" class="item_user">{{ userInfo }}</span>
      <a v-else class="item_info" href="#" @click="toLogin">{{ userInfo}}</a>
      <a class="item_logout" href="#" @click="toLogout">Logout</a>
    </div>
  </div>
</template>
<script>
import { onMounted, reactive, ref, toRefs } from 'vue'
import { useRouter } from 'vue-router'

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
// 回到首页
function useToHomePage(router) {
  const toHomePage = () => {
    router.push({
      path: '/home'
    })
  }
  return toHomePage
}
export default {
  name: 'HeadNavBar',
  props: {
    msg: String
  },
  setup(props) {
    const { getUserInfo, userInfo, showUser } = useGetUserInfo()
    const router = useRouter()
    const toLogout = useToLogout(router)
    const toLogin = useToLogin(router)
    const toHomePage = useToHomePage(router)
    const state = reactive({
      userInfo,
      showUser
    })
    return {
      ...toRefs(state), toLogout, toLogin, getUserInfo, toHomePage
    }
  }
}
</script>

<style scoped>
input:focus {
  outline-color: #EE6AA7;
}
button:focus {
  outline-color: forestgreen;
}
.page_container {
  display: grid;
  grid-template-columns: 60px 60px 1fr 80px 80px 80px;
}
.item_img {
  justify-self: center;
  align-self: center;
}
.item_home {
  justify-self: center;
  align-self: center;
}
.item_input {
  height: 40px;
  width: 400px;
  padding: 5px;
  border: solid 2px #DBDBDB;
  border-radius: 2px;
  justify-self: end;
  align-self: center;
}
.item_user {
  justify-self: center;
  align-self: center;
  color:#FF7F00;
}
.item_info {
  justify-self: center;
  align-self: center;
  color: #FF0033;
}
.item_btn {
  width: 80px;
  height: 40px;
  border: solid 2px  #63B8FF;
  border-radius: 2px;
  justify-self: center;
  align-self: center;
  background-color: #63B8FF;
}
.item_logout {
  justify-self: center;
  align-self: center;
}
ul {
  list-style-type: none;
  padding: 0;
}
</style>
