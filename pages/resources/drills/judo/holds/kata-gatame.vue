<template>
  <div>
    
    <main>
      <mp4page TITLE="Kata Gatame" />
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
      title: 'Kata Gatame | CMAA',
      meta: [
        { name: 'description', content: 'Kata Kata Gatame video and description' },
        
      ],
    
    }
  }
}
</script>
