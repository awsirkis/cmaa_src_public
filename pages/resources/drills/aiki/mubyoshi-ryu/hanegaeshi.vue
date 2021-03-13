<template>
  <div>
    
    <main>
      <mp4page TITLE="Hanagaeshi" />
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
      title: 'Hanagaeshi | CMAA',
      meta: [
        { name: 'description', content: 'Kata Hanagaeshi video and description' },
        
      ],
    
    }
  }
}
</script>
