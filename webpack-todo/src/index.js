//组件挂载到html上
import Vue from 'vue'
import App from './app.vue'

import './assets/style/global.styl'


const root=document.createElement('div')
document.body.appendChild(root)

//h参数是vue中的createApp参数
new Vue({
  //声明了组件渲染出来的是App的内容
 render:(h)=>h(App)
 //挂载到节点上
}).$mount(root)