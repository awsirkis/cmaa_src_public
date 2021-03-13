<template>
  <div>
    
    <main>
      <mp4page TITLE="Sawk Ngat" />
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
      title: 'Sawk Ngat | CMAA',
      meta: [
        { name: 'description', content: 'Kata Sawk Ngat video and description' },
        
      ],
    
    }
  }
}
</script>
