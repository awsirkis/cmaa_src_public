<template>
  <div>
    
    <main>
      <mp4page TITLE="Te Chiang" />
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
      title: 'Te Chiang | CMAA',
      meta: [
        { name: 'description', content: 'Kata Te Chiang video and description' },
        
      ],
    
    }
  }
}
</script>
