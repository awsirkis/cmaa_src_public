<template>
  <div>
    
    <main>
      <mp4page TITLE="Kouchi Gari" />
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
      title: 'Kouchi Gari | CMAA',
      meta: [
        { name: 'description', content: 'Kata Kouchi Gari video and description' },
        
      ],
    
    }
  }
}
</script>
