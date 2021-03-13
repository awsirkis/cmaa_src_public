<template>
  <div>
    
    <main>
      <mp4page TITLE="Nukite Dori" />
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
      title: 'Nukite Dori | CMAA',
      meta: [
        { name: 'description', content: 'Kata Nukite Dori video and description' },
        
      ],
    
    }
  }
}
</script>
