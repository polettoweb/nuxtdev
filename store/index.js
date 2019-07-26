import Vuex from 'vuex'
import axios from 'axios'

const createStore = () => {
  return new Vuex.Store({
    state: () => ({
      loading: true,
      portfolioItems: [],
      expDetails: [],
      blog: [],
      year: new Date().getFullYear(),
      baseApiUrl: 'https://marcopoletto.eu/api/v1/'
    }),
    actions: {
      async nuxtServerInit({ commit }) {
        const getPortfolio = await axios(
          'https://marcopoletto.eu/api/v2/portfolio'
        )
        const getResume = await axios.get(`${this.state.baseApiUrl}resume`)
        const getBlog = await axios.get(`${this.state.baseApiUrl}blog`)
        commit('setBlog', getBlog.data.content)
        commit('setResume', getResume.data.content)
        commit('setPortfolio', getPortfolio.data.content)
      }
    },
    mutations: {
      setPortfolio(state, payload) {
        state.portfolioItems = payload
      },
      setResume(state, payload) {
        state.expDetails = payload[0]
      },
      setBlog(state, payload) {
        state.blog = payload
      }
    }
  })
}

export default createStore
