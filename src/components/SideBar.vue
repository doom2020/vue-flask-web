<template>
  <div class="sideBar">
    <div>
      <ul class="ul_style">
        <li v-for="(item, index) in firstMenuList" :key="index" class="firstMenu">
          <a href="#" @click.prevent="sendMsgToHome">
            <span>
              <svg width="1.5em" height="1.5em" viewBox="0 0 16 16" :class="item.classIconLeft" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" :d="item.dIconLeft"/>
              </svg>
            </span>
            <span class="item_name">{{ item.name }}</span>
            <span class="item_svg">
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
  emits: ['listen-side-bar'],
  props: {
    firstMenuList: Array,
    myMessage: String
  },
  setup(props, { emit }) {
    console.log('home send sideBar: ', props.firstMenuList)
    console.log('home send sideBar:', props.myMessage)
    const sendMsgToHome = () => {
      console.log('send message')
      emit('listen-side-bar', { name: 'sideBar', msg: 'hello' })
    }
    return {
      sendMsgToHome
    }
  }
}
</script>

<style scoped>
.ul_style {
  padding-left: 0;
}
li {
    list-style: none;
  }
.firstMenu {
  height: 36px;
  line-height: 36px;
  background-color: #00EE76;
  margin-bottom: 2px;
  width: 180px;
  float: left;
}
.item_name {
  margin-left: 10px;
}
.item_svg {
  float: right;
  margin-right: 2px;
}
</style>
