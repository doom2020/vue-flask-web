<template>
  <div id="registerDiv">
    <form id="registerForm">
      <div class="form-group row">
        <label for="account" class="col-sm-2 col-form-label">用户名</label>
        <div class="col-sm-10">
          <input type="text" class="form-control is-valid" id="account" v-model="state.registerForm.account">
        </div>
      </div>
      <div class="form-group row">
        <label for="phone" class="col-sm-2 col-form-label">手机</label>
        <div class="col-sm-10">
          <input type="text" class="form-control is-valid" id="phone" v-model="state.registerForm.phone">
        </div>
      </div>
      <div class="form-group row">
        <label for="pwd" class="col-sm-2 col-form-label">密码</label>
        <div class="col-sm-10">
          <input type="password" class="form-control is-invalid" id="pwd" v-model="state.registerForm.pwd">
        </div>
      </div>
      <div class="form-group row">
        <label for="upwd" class="col-sm-2 col-form-label">确认密码</label>
        <div class="col-sm-10">
          <input type="password" class="form-control is-invalid" id="upwd" v-model="state.registerForm.upwd">
        </div>
      </div>
      <fieldset class="form-group">
        <div class="row">
          <legend class="col-form-label col-sm-2 pt-0">性别</legend>
          <div class="col-sm-10">
            <div class="form-check">
              <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="girl" checked>
              <label class="form-check-label" for="gridRadios1" style="margin-right: 80px;">
                女
              </label>
              <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="boy">
              <label class="form-check-label" for="gridRadios2" style="margin-right: 80px;">
                男
              </label>
              <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios3" value="secret" disabled>
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
            <input class="form-check-input" type="checkbox" id="agree" :checked="state.registerForm.isAgree">
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
    </form>
  </div>
</template>

<script>
import { computed, reactive } from 'vue'
import { useRouter } from 'vue-router'
export default {
  name: 'Register',
  setup() {
    const router = useRouter()
    const state = reactive({
      registerForm: {
        account: '', phone: '', pwd: '', upwd: '', isAgree: false, registerDisabled: true
      }
    })
    const toRegister = () => {
      router.push({
        path: '/'
      })
    }
    const registerDisabled = computed(() => {
      return state.registerForm.isAgree
    })
    return {
      state, toRegister, registerDisabled
    }
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
