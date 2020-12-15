<template>
  <div id="registerDiv">
    <form id="registerForm">
      <div class="form-group row">
        <label for="inputEmail3" class="col-sm-2 col-form-label">用户名</label>
        <div class="col-sm-10">
          <input type="text" class="form-control" id="inputEmail3">
        </div>
      </div>
      <div class="form-group row">
        <label for="inputEmail3" class="col-sm-2 col-form-label">邮箱</label>
        <div class="col-sm-10">
          <input type="text" class="form-control" id="inputEmail3">
        </div>
      </div>
      <div class="form-group row">
        <label for="inputEmail3" class="col-sm-2 col-form-label">手机</label>
        <div class="col-sm-10">
          <input type="text" class="form-control" id="inputEmail3">
        </div>
      </div>
      <div class="form-group row">
        <label for="inputPassword3" class="col-sm-2 col-form-label">密码</label>
        <div class="col-sm-10">
          <input type="password" class="form-control" id="inputPassword3">
        </div>
      </div>
      <div class="form-group row">
        <label for="inputPassword3" class="col-sm-2 col-form-label">确认密码</label>
        <div class="col-sm-10">
          <input type="password" class="form-control" id="inputPassword3">
        </div>
      </div>
      <fieldset class="form-group">
        <div class="row">
          <legend class="col-form-label col-sm-2 pt-0">性别</legend>
          <div class="col-sm-10">
            <div class="form-check">
              <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" checked>
              <label class="form-check-label" for="gridRadios1" style="margin-right: 80px;">
                女
              </label>
              <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2">
              <label class="form-check-label" for="gridRadios2" style="margin-right: 80px;">
                男
              </label>
              <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios3" value="option3" disabled>
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
            <input class="form-check-input" type="checkbox" id="gridCheck1">
            <label class="form-check-label" for="gridCheck1">
              同意此协议
            </label>
          </div>
        </div>
      </div>
      <div class="form-group row">
        <div class="col-sm-12">
          <button type="button" class="btn btn-success btn-lg btn-block" @click="toRegister">注册</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { useRouter } from 'vue-router'
export default {
  name: 'Register',
  setup() {
    const router = useRouter()
    const toRegister = () => {
      router.push({
        path: '/'
      })
    }
    return {
      toRegister
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
    padding-top: 5px;
    width: 600px;
    height: 520px;
    margin: 0 auto;
  }
</style>
