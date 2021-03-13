<template>
  <div>
    
    <main>
      <mp4page TITLE="Tsuki Taoshi" />
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
      title: 'Tsuki Taoshi | CMAA',
      meta: [
        { name: 'description', content: 'Kata Tsuki Taoshi video and description' },
        
      ],
    
    }
  }
}
</script>
