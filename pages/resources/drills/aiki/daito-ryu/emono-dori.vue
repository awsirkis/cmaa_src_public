<template>
  <div>
    
    <main>
      <mp4page TITLE="Emono Dori" />
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
      title: 'Emono Dori | CMAA',
      meta: [
        { name: 'description', content: 'Kata Emono Dori video and description' },
        
      ],
    
    }
  }
}
</script>
