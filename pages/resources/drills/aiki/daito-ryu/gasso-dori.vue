<template>
  <div>
    
    <main>
      <mp4page TITLE="Gasso Dori" />
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
      title: 'Gasso Dori | CMAA',
      meta: [
        { name: 'description', content: 'Kata Gasso Dori video and description' },
        
      ],
    
    }
  }
}
</script>
