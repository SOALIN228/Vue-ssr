<template>
  <div id="app">
    <div id="cover"></div>
    <Header></Header>
    <Todo></Todo>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from './page/header.vue'
import Todo from './page/todo.vue'
import Footer from './page/footer.vue'

export default {
  name: 'App',
  components: {
    Header,
    Todo,
    Footer
  },
  data () {
    return {}
  }
}
</script>

<style lang="scss" scoped>
  #app {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;

    #cover {
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      background-color: #999;
      opacity: .2;
      z-index: -1;
    }
  }
</style>
