<template>
  <div>
    
    <main>
      <mp4page TITLE="Makizume" />
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
      title: 'Makizume | CMAA',
      meta: [
        { name: 'description', content: 'Kata Makizume video and description' },
        
      ],
    
    }
  }
}
</script>
