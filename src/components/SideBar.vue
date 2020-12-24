<template>
  <div class="sideBar">
    <div style="width: 180px;flex:;position: fixed;top: 0;margin-top: 58px;overflow: auto;">
      <ul style="margin-bottom: 0;padding-left: 0;background-color: dimgrey;">
        <li v-for="(item, index) in firstMenuList" :key="index" class="firstMenu">
          <a href="#" @click.prevent="sendMsgToHome">
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
  </div>
</template>

<script>
export default {
  name: 'SideBar',
  emits: ['tell'],
  props: {
    firstMenuList: Array,
    myMessage: String
  },
  setup(props, { emit }) {
    console.log(props.firstMenuList)
    console.log(props.myMessage)
    const sendMsgToHome = () => {
      console.log('send message')
      emit('tell', { name: 'bohu', msg: 'hello' })
    }
    return {
      sendMsgToHome
    }
  }
}
</script>

<style scoped>
</style>
