<template>
  <div>
    
    <main>
      <mp4page TITLE="Okuri Eri Jime" />
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
      title: 'Okuri Eri Jime | CMAA',
      meta: [
        { name: 'description', content: 'Kata Okuri Eri Jime video and description' },
        
      ],
    
    }
  }
}
</script>
