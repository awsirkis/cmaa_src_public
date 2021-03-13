<template>
  <div>
    
    <main>
      <mp4page TITLE="Te Kot" />
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
      title: 'Te Kot | CMAA',
      meta: [
        { name: 'description', content: 'Kata Te Kot video and description' },
        
      ],
    
    }
  }
}
</script>
