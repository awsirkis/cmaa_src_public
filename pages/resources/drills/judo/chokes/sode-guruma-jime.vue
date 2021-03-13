<template>
  <div>
    
    <main>
      <mp4page TITLE="Sode Guruma Jime" />
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
      title: 'Sode Guruma Jime | CMAA',
      meta: [
        { name: 'description', content: 'Kata Sode Guruma Jime video and description' },
        
      ],
    
    }
  }
}
</script>
