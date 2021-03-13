<template>
  <div>
    
    <main>
      <mp4page TITLE="Daki Jime" />
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
      title: 'Daki Jime | CMAA',
      meta: [
        { name: 'description', content: 'Kata Daki Jime video and description' },
        
      ],
    
    }
  }
}
</script>
