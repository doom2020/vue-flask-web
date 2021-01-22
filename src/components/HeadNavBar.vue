<template>
  <div class="headNavBar">
    <div class="page_container">
      <a class="item_img" href="#"><img src="../assets/logo.png" style="height: 48px;width: 48px;"></a>
      <a class="item_home" href="#" style="margin-left: 10px;">Home</a>
      <input class="item_input" type="text" placeholder="Search。。">
      <button class="item_btn" type="button">Search</button>
      <span v-if="showUser" class="item_user" style="color: #0000FF">{{ userInfo }}</span>
      <a v-else class="item_info" href="#" @click="toLogin" style="color: #FF0033">未登录</a>
      <a class="item_logout" href="#" @click="toLogout">Logout</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeadNavBar',
  props: {
    msg: String
  }
}
</script>

<style scoped>
input:focus {
  outline: none;
}
button:focus {
  outline: none;
}
.page_container {
  display: grid;
  grid-template-columns: 100px 100px 1fr 100px 100px 100px;
}
.item_img {
  justify-self: center;
  align-self: center;
}
.item_home {
  justify-self: start;
  align-self: center;
}
.item_input {
  height: 40px;
  width: 460px;
  padding: 5px;
  border: solid 2px #DBDBDB;
  border-radius: 2px;
  justify-self: end;
  align-self: center;
}
.item_info {
  justify-self: end;
  align-self: center;
}
.item_btn {
  width: 80px;
  height: 40px;
  border: solid 2px  #63B8FF;
  border-radius: 2px;
  justify-self: center;
  align-self: center;
  background-color: #63B8FF;
}
.item_logout {
  justify-self: center;
  align-self: center;
}
ul {
  list-style-type: none;
  padding: 0;
}
</style>
