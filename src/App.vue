<template>
  <div id="app">
    <div id="cover"></div>
    <router-link :to="{path: '/app'}">app</router-link>
    <router-link :to="{path: '/login/123'}">login</router-link>
    <Header></Header>
    <transition name="fade">
      <router-view/>
    </transition>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from './page/todo/header.vue'
import Footer from './page/todo/footer.vue'

export default {
  name: 'App',
  components: {
    Header,
    Footer
  },
  data () {
    return {}
  },
  mounted () {
    console.log(this.$route)
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
