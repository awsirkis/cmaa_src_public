<template>
  <div>
    
    <main>
      <mp4page TITLE="Ryo Hiji Gashi" />
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
      title: 'Ryo Hiji Gashi | CMAA',
      meta: [
        { name: 'description', content: 'Kata Ryo Hiji Gashi video and description' },
        
      ],
    
    }
  }
}
</script>
