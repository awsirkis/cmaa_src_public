<template>
  <div>
    
    <main>
      <mp4page TITLE="Katame Zume" />
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
      title: 'Katame Zume | CMAA',
      meta: [
        { name: 'description', content: 'Kata Katame Zume video and description' },
        
      ],
    
    }
  }
}
</script>
