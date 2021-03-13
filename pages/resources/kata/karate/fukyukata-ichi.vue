<template>
  <div>
    
    <main>
      <mp4page TITLE="Fukyu Kata Ichi" SRC="1kitNwi6WfW8u0JWPSgPY2LFPmfEXmXea"/>
    </main>
    
  </div>
</template>

<script>
import mp4page from '~/components/mp4page'
export default {
    
  components: {
    mp4page
  },
  mounted(){
    if(!this.$store.getters.isAuth){
      this.$router.push('/')
    }
  },
  head () {
    return {
      title: 'Fukyu Kata Ichi | CMAA',
      meta: [
        { name: 'description', content: 'Kata Fukyu Kata Ichi video and description' },
        
      ],
    
    }
  }
}
</script>
