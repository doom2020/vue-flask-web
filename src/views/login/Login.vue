<template>
  <div id="loginDiv">
    <form id=loginForm>
      <div class="form-row">
        <div class="col-md-12 mb-3">
          <label for="validationAccount">Account</label>
          <input type="text" class="form-control" ref="accountInput" :class="accountClass" id="validationAccount" v-model.trim="account" required @blur="handlerAccount">
          <div :class="accountMsgClass" style="height: 20px;">{{ accountMsg }}</div>
        </div>
      </div>
      <div class="form-row">
        <div class="col-md-12 mb-3">
          <label for="validationPwd">Password</label>
          <input type="text" class="form-control" :class="passwordClass" id="validationPwd" v-model.trim="password" required @blur="handlerPassword">
          <div :class="passwordMsgClass" style="height: 20px;">{{ passwordMsg }}</div>
        </div>
      </div>
      <div class="form-row" style="height: 80px;">
        <div class="col-md-4 mb-3">
          <div class="form-group">
            <div class="form-check">
              <input class="form-check-input" type="checkbox" v-model="remPwd" id="remPwd" required @change="handlerRember">
              <label class="form-check-label" for="remPwd">Remeber Password</label>
              <div v-show="showRemMsg" class="fontStyle">下次登录可不用输入密码</div>
            </div>
          </div>
        </div>
        <div class="col-md-4 mb-3">
          <div class="form-group" style="float: right">
            <a href="#" id="forgetPwd" @click="forgetPassword" @mouseover="toFindPassword" @mouseleave="cancleToFindPwd">Forget password?</a>
            <label class="form-check-label" for="forgetPwd">
            </label>
            <div v-show="showForMsg" class="fontStyle">跳转至找回密码</div>
          </div>
        </div>
        <div class="col-md-4 mb-3">
          <div class="form-group" style="float: right">
            <a href="#" id="registerAccount" @click="registerAccount" @mouseover="toRegisterAccount" @mouseleave="cancleToRegister">Not account?</a>
            <label class="form-check-label" for="registerAccount">
            </label>
            <div v-show="showRegMsg" class="fontStyle">去注册一个账户</div>
          </div>
        </div>
      </div>
      <button id="btnLogin" type="button" class="btn btn-success btn-lg btn-block" :disabled='loginDisabled' @click="toLogin">登录</button>
      <p id="errMsg" v-show="showErrMsg">密码或账号异常</p>
    </form>
  </div>
</template>

<script>
import { onMounted, reactive, ref, toRefs } from 'vue'
import { useRouter } from 'vue-router'

// 1. 忘记密码
function useForgetPassword(router) {
  const forgetPassword = () => {
    router.push({
      path: '/forget'
    })
  }
  return forgetPassword
}

// 2. 注册账户
function useRegisterAccount(router) {
  const registerAccount = () => {
    router.push({
      path: '/register'
    })
  }
  return registerAccount
}

// 3. 登录
function useToLogin(router, account) {
  const loginDisabled = ref(false)
  const showErrMsg = ref(false)
  const toLogin = () => {
    loginDisabled.value = true
    if (!account.value) {
      showErrMsg.value = true
      loginDisabled.value = false
    } else {
      loginDisabled.value = false
      sessionStorage.setItem('userInfo', account.value)
      router.push({
        path: '/'
      })
    }
  }
  return { toLogin, loginDisabled, showErrMsg }
}

// 4. 用户input处理
function useHandlerAccount() {
  const account = ref('')
  const accountClass = ref('')
  const accountMsg = ref('')
  const accountMsgClass = ref('')
  const handlerAccount = () => {
    if (!account.value) {
      accountClass.value = 'is-invalid'
      accountMsg.value = 'account is not good'
      accountMsgClass.value = 'invalid-feedback'
    } else {
      accountClass.value = 'is-valid'
      accountMsg.value = 'account is good'
      accountMsgClass.value = 'valid-feedback'
    }
  }
  return { handlerAccount, account, accountClass, accountMsg, accountMsgClass }
}

// 5. 密码input处理
function useHandlerPassword() {
  const password = ref('')
  const passwordClass = ref('')
  const passwordMsg = ref('')
  const passwordMsgClass = ref('')
  const handlerPassword = () => {
    if (!password.value) {
      passwordClass.value = 'is-invalid'
      passwordMsg.value = 'password is not good'
      passwordMsgClass.value = 'invalid-feedback'
    } else {
      passwordClass.value = 'is-valid'
      passwordMsg.value = 'password is good'
      passwordMsgClass.value = 'valid-feedback'
    }
  }
  return { handlerPassword, password, passwordClass, passwordMsg, passwordMsgClass } 
}

// 6. 处理记住密码
function useHandlerRember() {
  const remPwd = ref(false)
  const showRemMsg = ref(false)
  const handlerRember = () => {
    if (remPwd.value) {
      showRemMsg.value = true
    } else {
      showRemMsg.value = false
    }
  }
  return { handlerRember, remPwd, showRemMsg }
}

// 7. 找回密码提示信息
function useToFindPassword(showForMsg) {
  const toFindPassword = () => {
    showForMsg.value = true
  }
  return toFindPassword
}

// 8. 隐藏找回密码提示信息
function useCancleToFindPwd(showForMsg) {
  const cancleToFindPwd = () => {
    showForMsg.value = false
  }
  return cancleToFindPwd
}

// 9. 显示注册账号提示
function useToRegisterAccount(showRegMsg) {
  const toRegisterAccount = () => {
    showRegMsg.value = true
  }
  return toRegisterAccount
}

// 10. 隐藏注册账号提示
function useCancleToRegister(showRegMsg) {
  const cancleToRegister = () => {
    showRegMsg.value = false
  }
  return cancleToRegister
}

// 11. 焦点到account输入框
function useFocusAccount() {
  const accountInput = ref(null)
  const focusAccount = onMounted(() => {
    accountInput.value.focus()
  })
  return { focusAccount, accountInput }
}

// 12. 注册enter事件
function useKeyUp(toLogin) {
  const keyUp = (event) => {
    if (event.keyCode === 13) {
      toLogin()
    }
  }
  return keyUp
}

// 13. 监听enter事件
function useListenEnter(keyUp) {
  const listenEnter = onMounted(() => {
    window.addEventListener('keyup', keyUp)
  })
  return listenEnter
}

export default {
  name: 'Login',
  setup() {
    const router = useRouter()
    const forgetPassword = useForgetPassword(router)
    const registerAccount = useRegisterAccount(router)
    const { handlerAccount, account, accountClass, accountMsg, accountMsgClass } = useHandlerAccount()
    const { toLogin, loginDisabled, showErrMsg } = useToLogin(router, account)
    const { focusAccount, accountInput } = useFocusAccount()
    const { handlerPassword, password, passwordClass, passwordMsg, passwordMsgClass } = useHandlerPassword()
    const { handlerRember, remPwd, showRemMsg } = useHandlerRember()
    const showForMsg = ref(false)
    const toFindPassword = useToFindPassword(showForMsg)
    const cancleToFindPwd = useCancleToFindPwd(showForMsg)
    const showRegMsg = ref(false)
    const toRegisterAccount = useToRegisterAccount(showRegMsg)
    const cancleToRegister = useCancleToRegister(showRegMsg)
    const keyUp = useKeyUp(toLogin)
    const listenEnter = useListenEnter(keyUp)
    const state = reactive({ account, accountClass, accountMsg, accountMsgClass, password, passwordClass, passwordMsg, passwordMsgClass, remPwd, showRemMsg, showForMsg, showRegMsg, showErrMsg, loginDisabled })
    return { ...toRefs(state), forgetPassword, toLogin, handlerAccount, handlerPassword, handlerRember, toFindPassword, cancleToFindPwd, accountInput, focusAccount, listenEnter, keyUp, registerAccount, toRegisterAccount, cancleToRegister }
  }
}
</script>
<style scoped>
  #btnLogin{
    margin-top: 20px;
  }
  #errMsg{
    text-align: center;
    margin-top: 10px;
    color:#FF0033;
  }
  #loginDiv{
    width: 600px;
    margin: 200px auto;
    background-color: #99CCFF;
    border: 2px;
    border-radius: 2px;
  }
  #loginForm{
    width: 500px;
    height: 450px;
    margin: 0px auto;
  }
  .fontStyle{
    font-size: 10px;
    color: #009933;
  }
</style>
