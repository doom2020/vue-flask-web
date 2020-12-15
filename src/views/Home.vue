<template>
  <div style="width: 100%">
    <nav class="navbar navbar-expand-lg navbar-light" style="position: fixed;top: 0;width: 100%;background-color: #e3f2fd;">
      <a class="navbar-brand" href="#">Navbar</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Link</a>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
          </li>
        </ul>
        <form class="form-inline my-2 my-lg-0" style="margin-right: 20px;">
          <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" style="width: 600px;">
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
        <ul class="navbar-nav" style="float: right;">
          <li class="nav-item">
            <a class="nav-link" href="#" @click="toLogin">未登录</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#" @click="toLogout">Logout</a>
          </li>
        </ul>
      </div>
    </nav>
    <div style="width: 180px;flex:;position: fixed;top: 0;margin-top: 58px;overflow: auto;">
      <ul style="margin-bottom: 0;padding-left: 0;background-color: dimgrey;">
        <li v-for="(item, index) in state.firstMenuList" :key="index" class="firstMenu">
          <a>
            <span>
              <svg width="1.5em" height="1.5em" viewBox="0 0 16 16" :class="item.classIconLeft" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" :d="item.dIconLeft"/>
              </svg>
            </span>
            <span style="margin-left: 10px;">{{ item.name }}</span>
            <span style="float: right;margin-right: 2px;">
              <svg width="1.5em" height="1.5em" viewBox="0 0 16 16" :class="item.classIconRight" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" :d="item.dIconRight"/>
              </svg>
            </span>
          </a>
        </li>
      </ul>
    </div>
    <nav class="navbar navbar-expand-lg navbar-light" style="position: fixed;bottom: 0;width: 100%;background-color: #e3f2fd;">
      <a class="navbar-brand" href="#" style="float: right">Version: 1.0.0.1</a>
    </nav>
  </div>
</template>
<script>
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
export default {
  name: 'Home',
  setup() {
    const state = reactive({
      firstMenuList: [
        {
          name: '配置中心',
          classIconLeft: 'bi bi-gear-fill',
          dIconLeft: 'M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 0 0-5.86 2.929 2.929 0 0 0 0 5.858z',
          classIconRight: 'bi bi-chevron-double-right',
          dIconRight: 'M3.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L9.293 8 3.646 2.354a.5.5 0 0 1 0-.708z'
        }
      ]
    })
    const router = useRouter()
    const toLogout = () => {
      router.push({
        path: '/login'
      })
    }
    const toLogin = () => {
      router.push({
        path: '/login'
      })
    }
    return {
      state, toLogout, toLogin
    }
  }
}
</script>
<style>
  li{
    list-style: none;
  }
  .firstMenu{
    height: 36px;
    line-height: 36px;
    /* text-align: center; */
    background-color: dodgerblue;
    margin-bottom: 2px;
  }
  body{
    margin: 0;
    padding: 0;
  }
</style>
