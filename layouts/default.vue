<template>
  <div>
    <pageheader />
    <nuxt/>
    <foot />
  </div>
</template>

<script>
import pageheader from '~/components/page-header.vue'
import foot from '~/components/footer.vue'


export default {
    
  components: {
    pageheader,
    foot
  },
  async mounted(){
    const fetch = require('node-fetch');
    let response = await fetch('/.netlify/functions/store', {method:'GET'})
    let json = JSON.parse(await response.text())
    this.$store.dispatch('setStore', {store: json})
    const res = await fetch('/.netlify/functions/recurring', {method:'GET'})
    json = JSON.parse(await res.text())
    this.$store.dispatch('setRecCal', {cal: json})
    const res2 = await fetch('/.netlify/functions/singleton', {method:'GET'})
    json = JSON.parse(await res2.text())
    this.$store.dispatch('setSinCal', {cal: json})
  }
 }
</script>

<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}
</style>
