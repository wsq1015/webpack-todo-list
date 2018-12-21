<template>
<!-- app.vue的template标签内只能有一个节点 -->
<div id="app">
  <div id="cover"></div>
  <Header></Header>
  <Todo></Todo>
  <Footer></Footer>
</div>
</template>

<script>
//引入header.vue组件
import Header from './todo/header.vue'
//引入footer.jsx组件
import Footer from './todo/footer.jsx'
//引入todo.vue组件
import Todo from './todo/todo.vue'

export default{
  //声明组件，之后可以使用组件标签，在id为app的div中像普通标签一样使用他们
  components:{
    Header,
    Footer,
    Todo,
  }
}
</script>

<style lang="stylus" scoped>
#app{
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
}
#cover{
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: #999;
  opacity: .7;
  z-index: -1;
}
</style>