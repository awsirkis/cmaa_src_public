<template>
  <div>
    
    <main>
      <mp4page TITLE="Gyaku Ude Dori" />
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
      title: 'Gyaku Ude Dori | CMAA',
      meta: [
        { name: 'description', content: 'Kata Gyaku Ude Dori video and description' },
        
      ],
    
    }
  }
}
</script>
