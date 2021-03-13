<template>
  <div>
    
    <main>
      <mp4page TITLE="Okuriashi Harai" />
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
      title: 'Okuriashi Harai | CMAA',
      meta: [
        { name: 'description', content: 'Kata Okuriashi Harai video and description' },
        
      ],
    
    }
  }
}
</script>
