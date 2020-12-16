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
        <div class="col-sm-10">
          <input type="text" class="form-control is-valid" id="accountForFind" v-model="state.findForm.account">
        </div>
      </div>
      <div class="form-group row">
        <label for="phoneForFind" class="col-sm-2 col-form-label">手机</label>
        <div class="col-sm-10">
          <input type="text" class="form-control is-valid" id="phoneForFind" v-model="state.findForm.phone">
        </div>
      </div>
      <div class="form-group row">
        <label for="codeForFind" class="col-sm-2 col-form-label">验证码</label>
        <div class="col-sm-10">
          <input type="text" class="form-control is-valid" id="codeForFind" v-model="state.findForm.code">
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
        <div class="col-sm-10">
          <input type="text" class="form-control is-invalid" id="accountForReset" v-model="state.resetForm.account">
        </div>
      </div>
      <div class="form-group row">
        <label for="phoneForReset" class="col-sm-2 col-form-label">手机</label>
        <div class="col-sm-10">
          <input type="text" class="form-control is-invalid" id="phoneForReset" v-model="state.resetForm.phone">
        </div>
      </div>
      <div class="form-group row">
        <label for="pwdForReset" class="col-sm-2 col-form-label">密码</label>
        <div class="col-sm-10">
          <input type="password" class="form-control is-invalid" id="pwdForReset" v-model="state.resetForm.pwd">
        </div>
      </div>
      <div class="form-group row">
        <label for="upwdForReset" class="col-sm-2 col-form-label">确认密码</label>
        <div class="col-sm-10">
          <input type="password" class="form-control is-invalid" id="upwdForReset" v-model="state.resetForm.upwd">
        </div>
      </div>
      <div class="form-group row">
        <label for="codeForReset" class="col-sm-2 col-form-label">验证码</label>
        <div class="col-sm-10">
          <input type="text" class="form-control is-invalid" id="codeForReset" v-model="state.resetForm.code">
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
        account: '', phone: '', code: ''
      },
      resetForm: {
        account: '', phone: '', code: '', pwd: '', upwd: ''
      }
    })
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
      }, 1000)
    }
    const toResetPassword = () => {
      console.log(state.resetForm)
      alert('密码重置成功!')
      setTimeout(() => {
        router.push({
          path: '/login'
        }, 1000)
      })
    }
    return {
      state, showResetPwdForm, showFindPwdForm, toFindPassword, toResetPassword
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
