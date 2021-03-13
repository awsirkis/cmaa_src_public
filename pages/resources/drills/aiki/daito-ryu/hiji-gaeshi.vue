<template>
  <div>
    
    <main>
      <mp4page TITLE="Hiji Gaeshi" />
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
      title: 'Hiji Gaeshi | CMAA',
      meta: [
        { name: 'description', content: 'Kata Hiji Gaeshi video and description' },
        
      ],
    
    }
  }
}
</script>
