<template>
  <div id="loginDiv">
    <form id=loginForm>
      <div class="form-row">
        <div class="col-md-12 mb-3">
          <label for="validationAccount">Account</label>
          <input type="text" class="form-control" :class="state.accountClass" id="validationAccount" v-model.trim="state.account" required @blur="handlerAccount">
          <div :class="state.accountMsgClass">{{ state.accountMsg }}</div>
        </div>
      </div>
      <div class="form-row">
        <div class="col-md-12 mb-3">
          <label for="validationPwd">Password</label>
          <input type="text" class="form-control" :class="state.passwordClass" id="validationPwd" v-model.trim="state.password" required @blur="handlerPassword">
          <div :class="state.passwordMsgClass">{{ state.passwordMsg }}</div>
        </div>
      </div>
      <div class="form-row">
        <div class="col-md-6 mb-3">
          <div class="form-group">
            <div class="form-check">
              <input class="form-check-input" type="checkbox" v-model="state.remPwd" id="remPwd" required @change="handlerRember">
              <label class="form-check-label" for="remPwd">Remeber Password</label>
              <div v-show="state.showRemMsg">下次登录可不用输入密码</div>
            </div>
          </div>
        </div>
        <div class="col-md-6 mb-3">
          <div class="form-group" style="float: right">
            <a href="#" id="forgetPwd" @click="forgetPassword">Forget password?</a>
            <label class="form-check-label" for="forgetPwd">
            </label>
            <div v-show="state.showForMsg">跳转至找回密码</div>
          </div>
        </div>
      </div>
      <button id="btnLogin" type="button" class="btn btn-primary btn-lg btn-block" @click="toLogin">登录</button>
      <p id="errMsg" v-show="state.showErrMsg">密码或账号异常</p>
    </form>
  </div>
</template>

<script>
import { reactive } from 'vue'
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
      showErrMsg: false
    })
    const forgetPwd = () => {}
    const toLogin = () => {}
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
    return {
      state, forgetPwd, toLogin, handlerAccount, handlerPassword, handlerRember
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
</style>
