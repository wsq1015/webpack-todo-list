<template>
  <section class="real-app">
    <input 
      type="text"
      class="add-input"
      autofocus="autofocus"
      placeholder="接下去要做什么？"
      @keyup.enter="addTodo"
    >
    <!--使用item组件-->
    <!-- :todo="todo"往子组件item.vue传入todo对象，子组件中通过props获取
    v-for="todo in filterTodos"遍历filterTodos数组
     @del="deleteTodo"接收子组件要触发的del方法 
     使用key管理可复用的元素
     vue会尽可能高效的渲染元素，通常会复用已有元素而不是从头开始渲染。
     这么做除了使vue变得非常快之外，还有其他一些好处。
     -->
    <Item 
      :todo="todo"
      v-for="todo in filterTodos"
      :key="todo.id"
      @del="deleteTodo"
    ></Item>
  <!-- 使用tabs组件 -->
  <!-- :filter="filter"往子组件tabs.vue传入filter对象，子组件中通过props获取 -->
  <!-- 父组件中获得从子组件传过来的toggle函数和clearAllCompleted函数 -->
    <Tabs 
      :filter="filter" 
      :todos="todos" 
      @toggle="toggleFilter"
      @clearAllCompleted="clearAllCompleted"
      ></Tabs>
  </section>
</template>


<script>
import Item from './item.vue'
import Tabs from './tabs.vue'

let id=0
export default{ 
components:{
    Item,
    Tabs,
  },
  // data()声明数据
data(){
  return{
    todos:[],
    filter:'all'
    }
},
computed:{
  filterTodos(){
    //如果选择的是all选项，就返回所有item选项
    if(this.filter==='all'){
      return this.todos
    }
    //定义一个completed，判断filter是不是已经完成，如果是则completed被赋值为true否则为false
    //将todos数组中，completed为true的值过滤出来，并返回一个新数组
    const completed=this.filter==='completed'
    return this.todos.filter(todo=>completed===todo.completed)
  }
},
  methods:{
    //添加todo项
    //unshift方法将input中的值加入到数组头部，且每一项有id，初始completed为false
    addTodo(e){
      this.todos.unshift({
        id:id++,
        content:e.target.value.trim(),
        completed:false
      })
      //添加完后将input框清空
      e.target.value=''
    },
    //删除todo项
    //findIndex方法找到todos数组中与当前选中项id相同的项
    //splice方法将返回的要删除的项删除
    deleteTodo(id){
      this.todos.splice(this.todos.findIndex(todo=>todo.id===id),1)
    },
    //state即为'all','active','completed'，点击切换状态为选择的状态
    toggleFilter(state){
      this.filter=state
    },
    //删选出状态为未完成的项，返回数组，显示未完成的项
    clearAllCompleted(){
      this.todos=this.todos.filter(todo=>!todo.completed)
    }
  }
}
</script>

<style lang="stylus" scoped>
.real-app{
  width 600px
  margin 0 auto 
  box-shadow 0 0 5px #666
}
/*color:inherit继承父类的颜色*/
/**font-smoothing决定了浏览器如何控制字体不要出现锯齿 */
/** antialiased字体像素级平滑，在深色背景上会让文字看起来更细了*/
.add-input{
  position :relative;
  margin:0;
  width :100%;
  font-family:inherit;
  font-size:24px;
  font-height:1.4em;
  border:0;
  outline:none;
  color:inherit;
  padding:6px;
  border:1px solid #999;
  box-shadow:inset 0 -1px 5px rgba(0,0,0,0.03);
  box-sizing:border-box;
  font-smoothing:antialiased;
  padding:16px 16px 16px 60px;
  border:none;
  box-shadow:inset 0 -2px 1px rgba(0,0,0,0.07);
  
}
</style>
