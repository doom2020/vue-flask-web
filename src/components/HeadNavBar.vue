<template>
  <div class="headNavBar">
    <div class="wrap" style="height: 48px;background-color: #6495ED">
      <a href="#"><img src="../assets/logo.png" style="height: 48px;width: 48px;"></a>
      <a href="#" style="margin-left: 10px;">Home</a>
      <input type="text" style="width: 260px;margin-left: 500px;">
      <button type="button" style="margin-left: 2px;">Primary</button>
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
.wrapp{
  display: line-flex;
}
ul {
  list-style-type: none;
  padding: 0;
}
</style>
