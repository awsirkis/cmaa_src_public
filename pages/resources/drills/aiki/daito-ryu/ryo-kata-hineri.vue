<template>
  <div>
    
    <main>
      <mp4page TITLE="Ryo Kata Hineri" />
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
      title: 'Ryo Kata Hineri | CMAA',
      meta: [
        { name: 'description', content: 'Kata Ryo Kata Hineri video and description' },
        
      ],
    
    }
  }
}
</script>
