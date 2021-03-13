<template>
  <div>
    
    <main>
      <mp4page TITLE="Suso Dori" />
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
      title: 'Suso Dori | CMAA',
      meta: [
        { name: 'description', content: 'Kata Suso Dori video and description' },
        
      ],
    
    }
  }
}
</script>
