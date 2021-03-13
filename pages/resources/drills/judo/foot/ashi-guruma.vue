<template>
  <div>
    
    <main>
      <mp4page TITLE="Ashi Guruma" />
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
      title: 'Ashi Guruma | CMAA',
      meta: [
        { name: 'description', content: 'Kata Ashi Guruma video and description' },
        
      ],
    
    }
  }
}
</script>
