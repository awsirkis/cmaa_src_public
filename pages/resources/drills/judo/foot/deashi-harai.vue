<template>
  <div>
    
    <main>
      <mp4page TITLE="Deashi Harai" />
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
      title: 'Deashi Harai | CMAA',
      meta: [
        { name: 'description', content: 'Kata Deashi Harai video and description' },
        
      ],
    
    }
  }
}
</script>
