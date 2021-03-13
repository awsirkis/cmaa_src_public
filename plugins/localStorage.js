import createPersistedState from 'vuex-persistedstate'

 
export default ({store}) => {
  window.onNuxtReady(() => {
    createPersistedState({
        key: 'cmaa',
        //getState: (key) => Cookie.getJSON(key), 
        //setState: (key, state) => Cookie.set(key, state, { expires: 1, secure: true })
    })(store)
  })
}