import Vuex from 'vuex'
import defaultState from './state'
import mutations from './mutations'
import getters from './getters'
import actions from './actions'

export default () => {
  const store = new Vuex.Store({
    strict: process.env.NODE_ENV !== 'production',
    state: defaultState,
    mutations,
    getters,
    actions,
    modules: {
      a: {
        namespaced: true,
        state: {
          text: 1
        },
        mutations: {
          updateText (state, text) {
            state.text = text
          }
        },
        getters: {
          doubleText (state, getters, rootState, rootGetters) {
            return state.text + ' ' + state.text
          }
        },
        actions: {
          add ({ state, commit, getters, rootState }) {
            commit('updateCount', { num: state.text + rootState.count }, { root: true })
          },
          rootAdd: {
            root: true,
            handler ({ state, commit, getters, rootState }, payload) {
              commit('updateCount', { num: state.text + rootState.count + '99999' }, { root: true })
            }
          }
        }
      },
      b: {
        namespaced: true,
        state: {
          text: 2
        },
        mutations: {
          updateText (state, text) {
            state.text = text
          }
        }
      }
    }
  })

  if (module.hot) {
    module.hot.accept([
      './state',
      './mutations',
      './getters',
      './actions'
    ], () => {
      const newState = require('./state').default
      const newMutations = require('./mutations').default
      const newGetters = require('./getters').default
      const newActions = require('./actions').default
      // 加载新模块
      store.hotUpdate({
        state: newState,
        mutations: newMutations,
        getters: newGetters,
        actions: newActions
      })
    })
  }
  return store
}
