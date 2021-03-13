<template>
  <div>
    
    <main>
      <mp4page TITLE="Tsuki Nin Shiho" />
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
      title: 'Tsuki Nin Shiho | CMAA',
      meta: [
        { name: 'description', content: 'Kata Tsuki Nin Shiho video and description' },
        
      ],
    
    }
  }
}
</script>
