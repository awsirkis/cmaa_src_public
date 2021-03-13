import * as Cookie from 'js-cookie'
export const actions = {
    nuxtServerInit() {},
    async login({ commit },{user}) {
      if(user == null){
        Cookie.remove('username')
        Cookie.remove('password')
        
      }
      else{
        Cookie.set('username', user.data.username)
      }
      commit('set',user)
    },
    async storePass({commit},{pass}){
      Cookie.set('password', pass)
      commit('pass',pass)
    },
    async logout({commit}){
      commit('set', null)
    },
    async addToCart({commit},{name, qty, index}){
      commit('pushToCart', {name: name, qty: qty, index: index})
      commit('qty')
    },
    async removeFromCart({commit},{name, qty}){
      commit('removeFromCart', {name: name, qty: qty})
      commit('qty')
    },
    async clearCart({commit}){
      commit('clearCart')
    },
    async setStore({commit}, {store}){
      commit('setStore', store)
    },
    async setRecCal({commit}, {cal}){
      commit('setRecCal', cal)
    },
    async setSinCal({commit}, {cal}){
      commit('setSinCal', cal)
    },
    async setVideo({commit},{vid}){
      commit('setVideo', vid)
    }

}

export const state = () => ({
  isAuthenticated: false,
  password: null,
  user: null,
  store:[
  ],
  rec_cal:[],
  sin_cal:[],
  cart:[],
  cartQty:0,
  video: null
})

export const mutations = {
  set(state, user) {
    state.isAuthenticated = !!user
    state.user = user
  },
  pass(state,pass){
    state.password=pass
  },
  removeFromCart(state, {name, qty}){
    for(let i = 0; i < state.cart.length; ++i){ // iterate through cart
      if(state.cart[i].name == name){
        state.cart[i].qty = parseInt(qty)
        if(qty == 0){
          state.cart.splice(i,1)
          --i
        }
        return
      }
    }
  },
  clearCart(state){
    const l = state.cart.length
    for(let i = 0; i < 1; ++i){
      state.cart.pop()
    }
    state.cartQty = 0
  },
  err(state, err){
    state.err = err
  },
  challenge(state, c){
    state.challengeName = c
  },
  pushToCart(state, {name, qty, index}){
    const item = state.store.filter(function(item){return item.name === name})[0]
    for(let i = 0; i < state.cart.length; ++i){ // iterate through cart
      if(state.cart[i].name == item.name + ' - ' + item.sizes[index]){
        state.cart[i].qty += parseInt(qty)
        return
      }
    }
    state.cart.push({name: item.name + ' - ' + item.sizes[index], price: item.prices[index], src: item.src, qty: parseInt(qty), id:item.id, index: index})
  },
  qty(state){
    let num = 0
    state.cart.forEach(c =>{
      num += parseInt(c.qty)
    })
    state.cartQty = num
  },
  setStore(state, store){
    let t = []
    for(let i in store){
      t.push(store[i])
    }
    state.store=t
  },
  setSinCal(state, cal){
    let t = []
    for(let i in cal){
      t.push(cal[i])
    }
    state.sin_cal=t
  },
  setRecCal(state, cal){
    let t = []
    for(let i in cal){
      t.push(cal[i])
    }
    state.rec_cal=t
  },
  video(state, vid){
    console.log(vid)
    state.video = vid
    console.log(state.video)
  }
}

export const getters = {
  isAuth: state=>{
    return state.user != null
  },
  username: state=>{
    return state.user == null ? null : state.user.data.username
  },
  name: state=>{
    return state.user == null ? null : state.user.data.name
  },
  email: state=>{
    return state.user == null ? null : state.user.data.email
  },
  phone: state=>{
    return state.user == null ? null : state.user.data.phone
  },
  role: state =>{
    return state.user == null ? null : state.user.data.role
  },
  birthdate: state=>{
    return state.user == null ? null : state.user.birthdate
  },
  rankKarate: state=>{
    return state.user == null ? null : state.user.data.karate_rank
  },
  parraRank: state=>{
    return state.user == null ? null : state.user.data.parra_rank
  },
  instructor: state=>{
    return state.user == null ? null : state.user.data.instructor
  },
  kana_name:state=>{
    return state.user == null ? null : state.user.data.kana
  },
  image: state=>{
    return state.user == null ? null : state.user.data.image
  },
  password: state=>{
    return state.password
  },

  cart: state=>{
    return state.cart
  },
  cartQty: state=>{
    return state.cartQty
  },
  store: state=>{
    return state.store
  },
  recCal: state=>{
    return state.rec_cal
  },
  sinCal:state=>{
    return state.sin_cal
  },
  video: state=>{
    return state.video
  }
}

