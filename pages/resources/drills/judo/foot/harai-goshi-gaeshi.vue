<template>
  <div>
    
    <main>
      <mp4page TITLE="Harai Goshi Gaeshi" />
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
      title: 'Harai Goshi Gaeshi | CMAA',
      meta: [
        { name: 'description', content: 'Kata Harai Goshi Gaeshi video and description' },
        
      ],
    
    }
  }
}
</script>
