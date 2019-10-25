<template>
  <div id="app">
    <div id="cover"></div>
    <router-link :to="{path: '/app/123'}">app123</router-link>
    <router-link :to="{path: '/app/456'}">app456</router-link>
    <router-link :to="{path: '/login'}">login</router-link>
    <Header></Header>
<!--    <transition name="fade">-->
<!--      <router-view/>-->
<!--    </transition>-->
    <router-view/>
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
