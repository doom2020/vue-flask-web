<template>
  <div class="footer">
      <nav class="navbar navbar-expand-lg navbar-light">
        <a class="version" href="#" @click="sendMsgToHome">Version: 1.0.1</a>
      </nav>
  </div>
  <div v-if="showVersion" class="modal modal_style">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Verion Info</h5>
          <button type="button" class="close" @click="closeModal">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <textarea class="detail_info">
            显示版本信息,每次上线更新的具体功能事项
          </textarea>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" @click="closeModal">Close</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, toRefs } from 'vue'
export default {
  name: 'FootNavBar',
  emits: ['listen-footer-bar'],
  props: {
    myMessage: String
  },
  setup(props, { emit }) {
    console.log('home send footer: ', props.myMessage)
    const state = reactive({
      showVersion: false
    })
    const sendMsgToHome = () => {
      state.showVersion = !state.showVersion
      console.log('send message')
      emit('listen-footer-bar', { name: 'footer', msg: 'hello' })
    }
    const closeModal = () => {
      state.showVersion = false
    }
    return {
      ...toRefs(state), sendMsgToHome, closeModal
    }
  }
}
</script>
<style scoped>
.modal_style {
  position: fixed;
  top: 200px;
  left: 200px;
  display: block;
}
.detail_info {
  width: 100%;
  height: 400px;
}
</style>
