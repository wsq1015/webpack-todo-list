<template>
  <div class="helper">
    <!-- 左边为剩余数目，中间是状态选择栏，右边为清除按钮 -->
    <span class="left">{{unFinishedTodoLength}} items left</span>
    <span class="tabs">
      <!-- 将state作为唯一的key -->
    <!-- 若filter的值与state相同，表明选中了该状态，设置它的class -->
      <span 
        v-for="state in states"
        :key="state"
        :class="[state,filter===state?'actived':'']"
        @click="toggleFilter(state)"
        >
        {{state}}
      </span>
    </span>
    <span class="clear" @click="clearAllCompleted">Clear Completed</span>
  </div>
</template>


<script>
export default {
  //props接收父组件传来的值
  props:{
    filter:{
      type:String,
      required:true,
    },
    todos:{
      type:Array,
      required:true,
    }
  },
  data(){
    return{
      states:['all','active','completed']
    }
  },
  computed:{
    //返回未完成的项目的个数
    unFinishedTodoLength(){
      return this.todos.filter(todo=>!todo.completed).length
    }
  },
  methods:{
    //通过emit将函数名传回给父组件
    clearAllCompleted(){
      this.$emit('clearAllCompleted')
    },
    toggleFilter(state){
      this.$emit('toggle',state)
    }
  }
}
</script>

<style lang="stylus" scoped>
.helper{
  font-weight 100;
  display flex
  justify-content space-between
  padding 5px 0
  line-height 30px
  background-color #fff
  font-size 14px
  font-smoothing:antialiased
}
.left,.clear,.tabs{
  padding 0 10px
  box-sizing border-box
}
.left ,.clear{
  width 150px
}
.left{
  text-align left 
}
.clear{
  text-align right
  cursor pointer
}
.tabs{
  width 200px;
  display flex;
  justify-content space-around
  *{
    display inline-block
    padding 0 10px
    cursor pointer
    border 1px solid rgba(175,47,47,0);
    &.actived{
      border-color rgba(175,47,47,0.4)
      border-radius 5px
    }
  }
}
</style>
