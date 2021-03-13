<template>
  <div>
    
    <main>
      <mp4page TITLE="Kosoto Gari" />
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
      title: 'Kosoto Gari | CMAA',
      meta: [
        { name: 'description', content: 'Kata Kosoto Gari video and description' },
        
      ],
    
    }
  }
}
</script>
