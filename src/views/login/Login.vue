<template>
  <div id="loginDiv">
    <form id=loginForm>
      <div class="form-row">
        <div class="col-md-12 mb-3">
          <label for="validationAccount">Account</label>
          <input type="text" class="form-control" ref="accountInput" :class="state.accountClass" id="validationAccount" v-model.trim="state.account" required @blur="handlerAccount">
          <div :class="state.accountMsgClass" style="height: 20px;">{{ state.accountMsg }}</div>
        </div>
      </div>
      <div class="form-row">
        <div class="col-md-12 mb-3">
          <label for="validationPwd">Password</label>
          <input type="text" class="form-control" :class="state.passwordClass" id="validationPwd" v-model.trim="state.password" required @blur="handlerPassword">
          <div :class="state.passwordMsgClass" style="height: 20px;">{{ state.passwordMsg }}</div>
        </div>
      </div>
      <div class="form-row" style="height: 80px;">
        <div class="col-md-4 mb-3">
          <div class="form-group">
            <div class="form-check">
              <input class="form-check-input" type="checkbox" v-model="state.remPwd" id="remPwd" required @change="handlerRember">
              <label class="form-check-label" for="remPwd">Remeber Password</label>
              <div v-show="state.showRemMsg" class="fontStyle">下次登录可不用输入密码</div>
            </div>
          </div>
        </div>
        <div class="col-md-4 mb-3">
          <div class="form-group" style="float: right">
            <a href="#" id="forgetPwd" @click="forgetPassword" @mouseover="toFindPassword" @mouseleave="cancleToFindPwd">Forget password?</a>
            <label class="form-check-label" for="forgetPwd">
            </label>
            <div v-show="state.showForMsg" class="fontStyle">跳转至找回密码</div>
          </div>
        </div>
        <div class="col-md-4 mb-3">
          <div class="form-group" style="float: right">
            <a href="#" id="registerAccount" @click="registerAccount" @mouseover="toRegisterAccount" @mouseleave="cancleToRegister">Not account?</a>
            <label class="form-check-label" for="registerAccount">
            </label>
            <div v-show="state.showRegMsg" class="fontStyle">去注册一个账户</div>
          </div>
        </div>
      </div>
      <button id="btnLogin" type="button" class="btn btn-success btn-lg btn-block" :disabled='state.loginDisabled' @click="toLogin">登录</button>
      <p id="errMsg" v-show="state.showErrMsg">密码或账号异常</p>
    </form>
  </div>
</template>

<script>
import { onMounted, reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
export default {
  name: 'Login',
  setup() {
    const state = reactive({
      account: '',
      accountMsg: '',
      accountClass: '',
      accountMsgClass: '',
      password: '',
      passwordMsg: '',
      passwordClass: '',
      passwordMsgClass: '',
      remPwd: false,
      showRemMsg: false,
      showForMsg: false,
      showErrMsg: false,
      showRegMsg: false,
      loginDisabled: false
    })
    const listenEnter = onMounted(() => {
      window.addEventListener('keyup', keyUp)
    })
    const router = useRouter()
    const forgetPassword = () => {
      router.push({
        path: '/forget'
      })
    }
    const registerAccount = () => {
      router.push({
        path: '/register'
      })
    }
    const toLogin = () => {
      state.loginDisabled = !state.loginDisabled
      router.push({
        path: '/'
      })
    }
    const handlerAccount = () => {
      if (!state.account) {
        state.accountClass = 'is-invalid'
        state.accountMsgClass = 'invalid-feedback'
        state.accountMsg = 'account is not good'
      } else {
        state.accountClass = 'is-valid'
        state.accountMsgClass = 'valid-feedback'
        state.accountMsg = 'account is good'
      }
    }
    const handlerPassword = () => {
      if (!state.account) {
        state.passwordClass = 'is-invalid'
        state.passwordMsgClass = 'invalid-feedback'
        state.passwordMsg = 'password is not good'
      } else {
        state.passwordClass = 'is-valid'
        state.passwordMsgClass = 'valid-feedback'
        state.passwordMsg = 'password is good'
      }
    }
    const handlerRember = () => {
      if (state.remPwd) {
        state.showRemMsg = true
      } else {
        state.showRemMsg = false
      }
    }
    const toFindPassword = () => {
      state.showForMsg = true
    }
    const cancleToFindPwd = () => {
      state.showForMsg = false
    }
    const toRegisterAccount = () => {
      state.showRegMsg = true
    }
    const cancleToRegister = () => {
      state.showRegMsg = false
    }
    const accountInput = ref(null)
    const focusAccount = onMounted(() => {
      accountInput.value.focus()
    })
    const keyUp = (event) => {
      if (event.keyCode === 13) {
        toLogin()
      }
    }
    return {
      state, forgetPassword, toLogin, handlerAccount, handlerPassword, handlerRember, toFindPassword, cancleToFindPwd, accountInput, focusAccount, listenEnter, keyUp, registerAccount, toRegisterAccount, cancleToRegister
    }
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
