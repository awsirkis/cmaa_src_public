<template>
  <div>
    
    <main>
      <mp4page TITLE="Morote Gari" />
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
      title: 'Morote Gari | CMAA',
      meta: [
        { name: 'description', content: 'Kata Morote Gari video and description' },
        
      ],
    
    }
  }
}
</script>
