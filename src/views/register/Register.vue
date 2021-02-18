<template>
  <div id="registerDiv">
    <form id="registerForm">
      <div class="form-group row">
        <label for="account" class="col-sm-2 col-form-label">用户名</label>
        <div class="col-sm-10">
          <input type="text" :class="accountClass" id="account" v-model="account" @blur="handlerAccount">
        </div>
      </div>
      <div class="form-group row">
        <label for="phone" class="col-sm-2 col-form-label">手机</label>
        <div class="col-sm-10">
          <input type="text" :class="phoneClass" id="phone" v-model="phone" @blur="handlerPhone">
        </div>
      </div>
      <div class="form-group row">
        <label for="pwd" class="col-sm-2 col-form-label">密码</label>
        <div class="col-sm-10">
          <input type="password" :class="pwdClass" id="pwd" v-model="pwd" @blur="handlerPwd">
        </div>
      </div>
      <div class="form-group row">
        <label for="upwd" class="col-sm-2 col-form-label">确认密码</label>
        <div class="col-sm-10">
          <input type="password" :class="upwdClass" id="upwd" v-model="upwd" @blur="handlerUpwd">
        </div>
      </div>
      <fieldset class="form-group">
        <div class="row">
          <legend class="col-form-label col-sm-2 pt-0">性别</legend>
          <div class="col-sm-10">
            <div class="form-check">
              <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="girl" v-model="isChecked">
              <label class="form-check-label" for="gridRadios1" style="margin-right: 80px;">
                女
              </label>
              <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="boy" v-model="isChecked">
              <label class="form-check-label" for="gridRadios2" style="margin-right: 80px;">
                男
              </label>
              <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios3" value="secret" disabled v-model="isChecked">
              <label class="form-check-label" for="gridRadios3">
                隐藏
              </label>
            </div>
          </div>
        </div>
      </fieldset>
      <div class="form-group row">
        <div class="col-sm-2"></div>
        <div class="col-sm-10">
          <div class="form-check" style="float: right">
            <input class="form-check-input" type="checkbox" id="agree" v-model="isAgree">
            <label class="form-check-label" for="agree">
              同意此协议
            </label>
          </div>
        </div>
      </div>
      <div class="form-group row">
        <div class="col-sm-12">
          <button type="button" class="btn btn-success btn-lg btn-block" @click="toRegister" :disabled="registerDisabled">注册</button>
        </div>
      </div>
      <div class="form-group row" style="margin-top: 40px;" v-show="showErrMsg">
        <div class="col-sm-12">
          <h4 style="text-align: center;color: #FF0033">注册失败</h4>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { computed, reactive, toRefs, ref } from 'vue'
import { useRouter } from 'vue-router'
import { forRegister } from '../../api/register'

function useHandlerAccount() {
  const account = ref('')
  const accountClass = ref('form-control')
  const handlerAccount = () => {
    if (!account.value) {
      accountClass.value = 'form-control is-invalid'
    } else {
      accountClass.value = 'form-control is-valid'
    }
    console.log('account:', account.value)
  }
  return { handlerAccount, account, accountClass }
}

function useHandlerPhone() {
  const phone = ref('')
  const phoneClass = ref('form-control')
  const handlerPhone = () => {
    if (!phone.value) {
      phoneClass.value = 'form-control is-invalid'
    } else {
      phoneClass.value = 'form-control is-valid'
    }
    console.log('phone:', phone.value)
  }
  return { handlerPhone, phone, phoneClass }
}

function useHandlerPwd() {
  const pwd = ref('')
  const pwdClass = ref('form-control')
  const handlerPwd = () => {
    if (!pwd.value) {
      pwdClass.value = 'form-control is-invalid'
    } else {
      pwdClass.value = 'form-control is-valid'
    }
    console.log('pwd:', pwd.value)
  }
  return { handlerPwd, pwd, pwdClass }
}

function useHandlerUpwd(pwd) {
  const upwd = ref('')
  const upwdClass = ref('form-control')
  const handlerUpwd = () => {
    if (!upwd.value || upwd.value !== pwd.value) {
      upwdClass.value = 'form-control is-invalid'
    } else {
      upwdClass.value = 'form-control is-valid'
    }
    console.log('upwd:', upwd.value)
  }
  return { handlerUpwd, upwd, upwdClass }
}

function useRegisterDisabled() {
  const isAgree = ref(false)
  const registerDisabled = computed(() => {
    console.log(isAgree.value)
    return !isAgree.value
  })
  return { registerDisabled, isAgree }
}

function useToRegister(router, account, phone, pwd, upwd, isChecked) {
  const showErrMsg = ref(false)
  const toRegister = () => {
    if (account.value && phone.value && pwd.value && upwd.value && isChecked) {
      const data = { account: account.value, phone: phone.value, pwd: pwd.value, upwd: upwd.value }
      forRegister(data).then(response => {
        console.log(response)
      }).catch(error => {
        console.log(error)
      })
      sessionStorage.setItem('userInfo', account.value)
      router.push({
        path: '/'
      })
    } else {
      showErrMsg.value = true
    }
    console.log(showErrMsg.value)
    console.log(account.value, phone.value, pwd.value, upwd.value, isChecked.value)
  }
  return { toRegister, showErrMsg }
}
export default {
  name: 'Register',
  setup() {
    const { handlerAccount, account, accountClass } = useHandlerAccount()
    const { handlerPhone, phone, phoneClass } = useHandlerPhone()
    const { handlerPwd, pwd, pwdClass } = useHandlerPwd()
    const { handlerUpwd, upwd, upwdClass } = useHandlerUpwd(pwd)
    const isChecked = ref('girl')
    const router = useRouter()
    const { toRegister, showErrMsg } = useToRegister(router, account, phone, pwd, upwd, isChecked)
    const { registerDisabled, isAgree } = useRegisterDisabled()
    const state = reactive({ account, accountClass, phone, phoneClass, pwd, pwdClass, upwd, upwdClass, isChecked, showErrMsg, registerDisabled, isAgree })
    return { ...toRefs(state), handlerAccount, handlerPhone, handlerPwd, handlerUpwd, toRegister }
  }
}
</script>
<style>
#registerDiv{
    width: 700px;
    margin: 200px auto;
    background-color: #99CCFF;
    border: 2px;
    border-radius: 2px;
  }
  #registerForm{
    padding-top: 10px;
    width: 600px;
    height: 500px;
    margin: 0 auto;
  }
</style>
