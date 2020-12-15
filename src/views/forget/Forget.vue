<template>
  <div id="forgetDiv">
    <ul class="nav nav-tabs" style="margin-left: 10px;padding-top: 10px;">
      <li class="nav-item">
          <a class="nav-link active" href="#">找回密码</a>
      </li>
      <!-- <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Dropdown</a>
          <div class="dropdown-menu">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <a class="dropdown-item" href="#">Something else here</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Separated link</a>
          </div>
      </li> -->
      <li class="nav-item">
          <a class="nav-link" href="#">重置密码</a>
      </li>
      <li class="nav-item">
          <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
      </li>
    </ul>
    <form id="forgetForm">
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
        <label for="inputEmail3" class="col-sm-2 col-form-label">验证码</label>
        <div class="col-sm-10">
          <input type="text" class="form-control" id="inputEmail3">
        </div>
      </div>
      <!-- <div class="form-group row">
        <div class="col-sm-2"></div>
        <div class="col-sm-10">
          <div class="form-check" style="float: right">
            <input class="form-check-input" type="checkbox" id="gridCheck1">
            <label class="form-check-label" for="gridCheck1">
              同意此协议
            </label>
          </div>
        </div>
      </div> -->
      <div class="form-group row" style="margin-top: 50px;">
        <div class="col-sm-12">
          <button type="button" class="btn btn-success btn-lg btn-block" @click="toRegister">获取验证码</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Forget'
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
  #forgetForm{
    padding-top: 5px;
    width: 600px;
    height: 400px;
    margin: 0 auto;
    margin-top: 100px;
  }
</style>
