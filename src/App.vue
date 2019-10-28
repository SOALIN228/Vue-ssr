<template>
  <div id="app">
    <div id="cover"></div>
    <router-link :to="{path: '/app'}">app</router-link>
    <router-link :to="{path: '/login'}">login</router-link>
    <Header></Header>
    {{doubleText}}
    <button @click="updateCountAsync({num: 5, time: 1000})">{{count}}</button>
    <transition name="fade">
      <router-view/>
    </transition>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from './page/todo/header.vue'
import Footer from './page/todo/footer.vue'
import { mapGetters, mapMutations, mapActions } from 'vuex'

export default {
  name: 'App',
  components: {
    Header,
    Footer
  },
  data () {
    return {
      id: 0
    }
  },
  computed: {
    count () {
      return this.$store.state.count
    },
    ...mapGetters({
      doubleText: 'a/doubleText'
    })
  },
  mounted: function () {
    // let i = 0
    // setInterval(() => {
    //   this.$store.commit('updateCount', { num: i++ })
    // }, 1000)
    // this.$store.dispatch({
    //   type: 'updateCountAsync',
    //   num: 5,
    //   time: 1000
    // })
    this.updateText('ccc')
    // this['a/add']()
    this.rootAdd()
  },
  methods: {
    ...mapMutations('a', [
      'updateText'
    ]),
    ...mapActions([
      'updateCountAsync',
      'a/add',
      'rootAdd'
    ])
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
