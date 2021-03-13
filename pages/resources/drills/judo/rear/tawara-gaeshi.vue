<template>
  <div>
    
    <main>
      <mp4page TITLE="Tawara Gaeshi" />
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
      title: 'Tawara Gaeshi | CMAA',
      meta: [
        { name: 'description', content: 'Kata Tawara Gaeshi video and description' },
        
      ],
    
    }
  }
}
</script>
