<template>
  <section class="real-app">
    <input type="text" class="add-input"
           autofocus="autofocus"
           placeholder="接下去要做什么?"
           @keyup.enter="addTodo">
    <Item v-for="todo in filteredTodos" :key="todo.id"
          :todo="todo"
          @del="deleteTodo"
          @toggle="checkToggle"
    ></Item>
    <Tabs :filter="filter"
          :todos="filteredTodos"
          @toggle="toggleFilter"
          @clearAllCompleted="clearAllCompleted"
    ></Tabs>
  </section>
</template>

<script>
import Item from './item.vue'
import Tabs from './tabs.vue'

export default {
  name: 'Todo',
  beforeRouteEnter (to, from, next) {
    console.log('beforeRouteEnter')
    next(vm => {
      console.log(vm)
    })
  },
  beforeRouteUpdate (to, from, next) {
    console.log('beforeRouteUpdate')
    next()
  },
  beforeRouteLeave (to, from, next) {
    console.log('beforeRouteLeave')
    next()
  },
  components: {
    Item,
    Tabs
  },
  data () {
    return {
      todos: [],
      filter: 'all',
      id: 0
    }
  },
  computed: {
    filteredTodos () {
      if (this.filter === 'all') {
        return this.todos
      }
      const completed = this.filter === 'completed'
      return this.todos.filter(todo => completed === todo.completed)
    }
  },
  methods: {
    addTodo (e) {
      this.todos.unshift({
        id: this.id++,
        content: e.target.value.trim(),
        completed: false
      })
      e.target.value = ''
    },
    deleteTodo (id) {
      this.todos.splice(this.todos.findIndex(todo => todo.id === id), 1)
    },
    toggleFilter (state) {
      this.filter = state
    },
    clearAllCompleted () {
      this.todos = this.todos.filter(todo => !todo.completed)
    },
    checkToggle (checkItem) {
      this.todos.map(item => {
        if (item.id === checkItem.id) {
          item.completed = !item.completed
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  .real-app {
    width: 600px;
    margin: 0 auto;
    box-shadow: 0 0 5px #666;

    .add-input {
      position: relative;
      margin: 0;
      width: 100%;
      font-size: 24px;
      font-family: inherit;
      font-weight: inherit;
      line-height: 1.4em;
      border: none;
      outline: none;
      color: inherit;
      box-sizing: border-box;
      padding: 16px 16px 16px 36px;
      box-shadow: inset 0 -2px 1px rgba(0, 0, 0, 0.03);
    }
  }
</style>
