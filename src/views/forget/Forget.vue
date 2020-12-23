<template>
  <div id="forgetDiv">
    <ul class="nav nav-tabs" style="margin-left: 10px;padding-top: 10px;">
      <li class="nav-item">
          <a class="nav-link" href="#" :style="state.findPwdStyle" @click="showFindPwdForm">找回密码</a>
      </li>
      <li class="nav-item">
          <a class="nav-link" href="#" :style="state.resetPwdStyle" @click="showResetPwdForm">重置密码</a>
      </li>
    </ul>
    <form id="findPwdForm" v-if="state.isFindPwd">
      <div class="form-group row">
        <label for="accountForFind" class="col-sm-2 col-form-label">用户名</label>
        <div class="col-sm-8">
          <input type="text" :class="state.findForm.accountClass" id="accountForFind" v-model="state.findForm.account" @blur="handlerAccountForFind">
        </div>
      </div>
      <div class="form-group row">
        <label for="phoneForFind" class="col-sm-2 col-form-label">手机</label>
        <div class="col-sm-8">
          <input type="text" :class="state.findForm.phoneClass" id="phoneForFind" v-model="state.findForm.phone" @blur="handlerPhoneForFind">
        </div>
        <button class="col-sm-2 btn btn-primary" style="font-size: 6px;" @click="toGetCodeForFind">获取验证码</button>
      </div>
      <div class="form-group row">
        <label for="codeForFind" class="col-sm-2 col-form-label">验证码</label>
        <div class="col-sm-8">
          <input type="text" :class="state.findForm.codeClass" id="codeForFind" v-model="state.findForm.code" @blur="handlerCodeForFind">
        </div>
      </div>
      <div class="form-group row" style="margin-top: 50px;">
        <div class="col-sm-12">
          <button type="button" class="btn btn-success btn-lg btn-block" @click="toFindPassword">找回密码</button>
        </div>
      </div>
    </form>
    <form id="resetPwdForm" v-if="!state.isFindPwd">
      <div class="form-group row">
        <label for="accountForReset" class="col-sm-2 col-form-label">用户名</label>
        <div class="col-sm-8">
          <input type="text" :class="state.resetForm.accountClass" id="accountForReset" v-model="state.resetForm.account" @blur="handlerAccountForReset">
        </div>
      </div>
      <div class="form-group row">
        <label for="phoneForReset" class="col-sm-2 col-form-label">手机</label>
        <div class="col-sm-8">
          <input type="text" :class="state.resetForm.phoneClass" id="phoneForReset" v-model="state.resetForm.phone" @blur="handlerPhoneForReset">
        </div>
        <button class="col-sm-2 btn btn-primary" style="font-size: 6px;" @click="toGetCodeForReset">获取验证码</button>
      </div>
      <div class="form-group row">
        <label for="pwdForReset" class="col-sm-2 col-form-label">密码</label>
        <div class="col-sm-8">
          <input type="password" :class="state.resetForm.pwdClass" id="pwdForReset" v-model="state.resetForm.pwd" @blur="handlerPwdForReset">
        </div>
      </div>
      <div class="form-group row">
        <label for="upwdForReset" class="col-sm-2 col-form-label">确认密码</label>
        <div class="col-sm-8">
          <input type="password" :class="state.resetForm.upwdClass" id="upwdForReset" v-model="state.resetForm.upwd" @blur="handlerUpwdForReset">
        </div>
      </div>
      <div class="form-group row">
        <label for="codeForReset" class="col-sm-2 col-form-label">验证码</label>
        <div class="col-sm-8">
          <input type="text" :class="state.resetForm.codeClass" id="codeForReset" v-model="state.resetForm.code" @blur="handlerCodeForReset">
        </div>
      </div>
      <div class="form-group row" style="margin-top: 50px;">
        <div class="col-sm-12">
          <button type="button" class="btn btn-success btn-lg btn-block" @click="toResetPassword">重置密码</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
export default {
  name: 'Forget',
  setup() {
    const router = useRouter()
    const state = reactive({
      resetPwdStyle: '',
      findPwdStyle: 'border-bottom: 5px solid #003399;background-color: #F0FFFF',
      isFindPwd: true,
      findForm: {
        account: '123', phone: '', code: '', accountClass: 'form-control', phoneClass: 'form-control', codeClass: 'form-control'
      },
      resetForm: {
        account: '', phone: '', code: '', pwd: '', upwd: '', accountClass: 'form-control', phoneClass: 'form-control', codeClass: 'form-control', pwdClass: 'form-control', upwdClass: 'form-control'
      }
    })
    // const findForm = reactive({
    //   account: '', phone: '', code: '', accountClass: 'form-control', phoneClass: 'form-control', codeClass: 'form-control'
    // })
    // const resetForm = reactive({
    //   account: '', phone: '', code: '', pwd: '', upwd: '', accountClass: 'form-control', phoneClass: 'form-control', codeClass: 'form-control', pwdClass: 'form-control', upwdClass: 'form-control'
    // })
    console.log(state.findForm.account)
    const toGetCodeForFind = (state) => {
      if (!state.findForm.phone) {
        return true
      } else {
        alert('验证码：1234')
      }
    }

    const toGetCodeForReset = (state) => {
      if (!state.resetForm.phone) {
        return true
      } else {
        alert('验证码：1234')
      }
    }
    
    const handlerAccountForFind = (state) => {
      if (!state.findForm.account) {
        state.findForm.accountClass = 'form-control is-invalid'
      } else {
        state.findForm.accountClass = 'form-control is-valid'
      }
    }

    const handlerPhoneForFind = (state) => {
      if (!state.findForm.phone) {
        state.indForm.phoneClass = 'form-control is-invalid'
      } else {
        state.findForm.phoneClass = 'form-control is-valid'
      }
    }

    const handlerCodeForFind = (state) => {
      if (!state.findForm.code) {
        state.findForm.codeClass = 'form-control is-invalid'
      } else {
        state.findForm.codeClass = 'form-control is-valid'
      }
    }

    const handlerAccountForReset = (state) => {
      if (!state.resetForm.account) {
        state.resetForm.accountClass = 'form-control is-invalid'
      } else {
        state.resetForm.accountClass = 'form-control is-valid'
      }
    }

    const handlerPhoneForReset = (state) => {
      if (!state.resetForm.phone) {
        state.resetForm.phoneClass = 'form-control is-invalid'
      } else {
        state.resetForm.phoneClass = 'form-control is-valid'
      }
    }

    const handlerCodeForReset = (state) => {
      if (!state.resetForm.code) {
        state.resetForm.codeClass = 'form-control is-invalid'
      } else {
        state.resetForm.codeClass = 'form-control is-valid'
      }
    }
    const handlerPwdForReset = (state) => {
      if (!state.resetForm.pwd) {
        state.resetForm.pwdClass = 'form-control is-invalid'
      } else {
        state.resetForm.pwdClass = 'form-control is-valid'
      }
    }
    const handlerUpwdForReset = (state) => {
      if (!state.resetForm.upwd) {
        state.resetForm.upwdClass = 'form-control is-invalid'
      } else {
        state.resetForm.upwdClass = 'form-control is-valid'
      }
    }
    const showFindPwdForm = () => {
      state.findPwdStyle = 'border-bottom: 5px solid #003399;background-color: #F0FFFF'
      state.resetPwdStyle = ''
      state.isFindPwd = true
    }
    const showResetPwdForm = () => {
      state.resetPwdStyle = 'border-bottom: 5px solid #003399;background-color: #F0FFFF'
      state.findPwdStyle = ''
      state.isFindPwd = false
    }
    const toFindPassword = () => {
      console.log(state.findForm)
      alert('找回密码成功,密码已下发至短信,请注意查收')
      setTimeout(() => {
        router.push({
          path: '/login'
        })
      }, 500)
    }
    const toResetPassword = () => {
      console.log(state.resetForm)
      alert('密码重置成功!')
      setTimeout(() => {
        router.push({
          path: '/login'
        }, 500)
      })
    }
    return {
      state,
      showResetPwdForm,
      showFindPwdForm,
      toFindPassword,
      toResetPassword,
      handlerAccountForFind,
      handlerPhoneForFind,
      handlerCodeForFind,
      handlerAccountForReset,
      handlerPhoneForReset,
      handlerCodeForReset,
      handlerPwdForReset,
      handlerUpwdForReset,
      toGetCodeForFind,
      toGetCodeForReset
    }
  }
}
</script>
<style>
#forgetDiv{
    width: 800px;
    margin: 200px auto;
    background-color: #99CCFF;
    border: 2px;
    border-radius: 2px;
  }
  #findPwdForm{
    padding: 5px;
    width: 600px;
    height: 450px;
    margin: 0 auto;
    margin-top: 50px;
  }
  #resetPwdForm{
    padding: 5px;
    width: 600px;
    height: 450px;
    margin: 0 auto;
    margin-top: 50px;
  }
</style>
