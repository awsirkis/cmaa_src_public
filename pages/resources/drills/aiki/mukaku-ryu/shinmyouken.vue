<template>
  <div>
    
    <main>
      <mp4page TITLE="Shinmyouken" />
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
      title: 'Shinmyouken | CMAA',
      meta: [
        { name: 'description', content: 'Kata Shinmyouken video and description' },
        
      ],
    
    }
  }
}
</script>
