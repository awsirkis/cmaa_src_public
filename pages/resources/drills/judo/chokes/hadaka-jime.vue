<template>
  <div>
    
    <main>
      <mp4page TITLE="Hadaka Jime" />
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
      title: 'Hadaka Jime | CMAA',
      meta: [
        { name: 'description', content: 'Kata Hadaka Jime video and description' },
        
      ],
    
    }
  }
}
</script>
