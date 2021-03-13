<template>
  <div>
    
    <main>
      <mp4page TITLE="Shoto Zume" />
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
      title: 'Shoto Zume | CMAA',
      meta: [
        { name: 'description', content: 'Kata Shoto Zume video and description' },
        
      ],
    
    }
  }
}
</script>
