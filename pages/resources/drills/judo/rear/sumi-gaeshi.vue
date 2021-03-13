<template>
  <div>
    
    <main>
      <mp4page TITLE="Sumi Gaeshi" />
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
      title: 'Sumi Gaeshi | CMAA',
      meta: [
        { name: 'description', content: 'Kata Sumi Gaeshi video and description' },
        
      ],
    
    }
  }
}
</script>
