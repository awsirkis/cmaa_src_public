<template>
  <div>
    
    <main>
      <mp4page TITLE="Kata Te Jime" />
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
      title: 'Kata Te Jime | CMAA',
      meta: [
        { name: 'description', content: 'Kata Kata Te Jime video and description' },
        
      ],
    
    }
  }
}
</script>
