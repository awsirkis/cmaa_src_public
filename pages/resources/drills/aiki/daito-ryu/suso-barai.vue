<template>
  <div>
    
    <main>
      <mp4page TITLE="Suso Barai" />
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
      title: 'Suso Barai | CMAA',
      meta: [
        { name: 'description', content: 'Kata Suso Barai video and description' },
        
      ],
    
    }
  }
}
</script>
