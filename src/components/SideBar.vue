<template>
  <div class="sideBar">
    <div>
      <ul class="ul_style">
        <li v-for="(item, index) in firstMenuList" :key="index" class="firstMenu">
          <a href="#" @click="sendMsgToHome(item, index)">
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
          <ul class="child_ul" v-show="item.current">
            <li class="child_li" v-for="(item_c, index_c) in item.child" :key="index_c">
              <a href="#" @click="toTargetPage(item_c.name)">{{ item_c.name }}</a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { reactive, toRefs } from 'vue'
import { useRouter } from 'vue-router'
export default {
  name: 'SideBar',
  emits: ['listen-side-bar'],
  props: {
    myMessage: String
  },
  setup(props, { emit }) {
    console.log('home send sideBar:', props.myMessage)
    const router = useRouter()
    const state = reactive({
      firstMenuList: [
        {
          name: '配置中心',
          classIconLeft: 'bi bi-gear-fill',
          dIconLeft: 'M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 0 0-5.86 2.929 2.929 0 0 0 0 5.858z',
          classIconRight: 'bi bi-chevron-double-right',
          dIconRight: 'M3.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L9.293 8 3.646 2.354a.5.5 0 0 1 0-.708z',
          current: false,
          child: [
            {
              name: '代理配置'
            },
            {
              name: '任务配置'
            },
            {
              name: '服务配置'
            }
          ]
        },
        {
          name: '消息中心',
          classIconLeft: 'bi bi-menu-up',
          dIconLeft: 'M7.646 15.854a.5.5 0 0 0 .708 0L10.207 14H14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h3.793l1.853 1.854zM1 9V6h14v3H1zm14 1v2a1 1 0 0 1-1 1h-3.793a1 1 0 0 0-.707.293l-1.5 1.5-1.5-1.5A1 1 0 0 0 5.793 13H2a1 1 0 0 1-1-1v-2h14zm0-5H1V3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v2zM2 11.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 0-1h-8a.5.5 0 0 0-.5.5zm0-4a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 0-1h-11a.5.5 0 0 0-.5.5zm0-4a.5.5 0 0 0 .5.5h6a.5.5 0 0 0 0-1h-6a.5.5 0 0 0-.5.5z',
          classIconRight: 'bi bi-menu-up',
          dIconRight: 'M3.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L9.293 8 3.646 2.354a.5.5 0 0 1 0-.708z',
          current: false,
          child: [
            {
              name: '代理消息'
            },
            {
              name: '任务消息'
            },
            {
              name: '服务消息'
            }
          ]
        }
      ]
    })
    const sendMsgToHome = (item, index) => {
      if (!item.current) {
        item.dIconRight = 'M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'
        item.current = true
      } else {
        item.dIconRight = 'M3.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L9.293 8 3.646 2.354a.5.5 0 0 1 0-.708z'
        item.current = false
      }
      console.log(state.firstMenuList)
      state.firstMenuList.forEach((item1, index1) => {
        if (!item1.current) {
          item1.dIconRight = 'M3.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L9.293 8 3.646 2.354a.5.5 0 0 1 0-.708z'
        }
      })
      console.log('send message')
      emit('listen-side-bar', { name: 'sideBar', msg: 'hello' })
    }
    const toTargetPage = (pageName) => {
      if (pageName === '代理配置') {
        router.push({
          path: '/config/proxyMng'
        })
      } else if (pageName === '任务配置') {
        router.push({
          path: '/config/taskMng'
        })
      } else if (pageName === '服务配置') {
        router.push({
          path: '/config/serviceMng'
        })
      }
    }
    return {
      ...toRefs(state), sendMsgToHome, toTargetPage
    }
  }
}
</script>

<style scoped>
.ul_style {
  padding: 0;
  margin-bottom: 0;
  height: auto;
}
li {
    list-style: none;
  }
.firstMenu {
  padding: 5px;
  background-color: #00EE76;
  margin-top: 2px;
}
.item_name {
  margin-left: 10px;
}
.item_svg {
  margin-left: 48px;
}
.child_ul {
  margin-top: 10px;
  padding: 0;
}
.child_li {
  margin-top: 5px;
  text-align: center;
  background-color:#525252;
}
</style>
