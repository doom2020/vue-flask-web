<template>
  <div class="footer">
      <nav class="navbar navbar-expand-lg navbar-light">
        <a class="version" href="#" @click="sendMsgToHome">Version: 1.0.1</a>
      </nav>
  </div>
</template>

<script>
export default {
  name: 'FootNavBar',
  emits: ['listen-footer-bar'],
  props: {
    myMessage: String
  },
  setup(props, { emit }) {
    console.log('home send footer: ', props.myMessage)
    const sendMsgToHome = () => {
      console.log('send message')
      emit('listen-footer-bar', { name: 'footer', msg: 'hello' })
    }
    return {
      sendMsgToHome
    }
  }
}
</script>
<style scoped>
.version {
  float: right;
}
</style>
