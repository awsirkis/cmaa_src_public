<template>
  <div>
    
    <main>
      <mp4page TITLE="Izori" />
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
      title: 'Izori | CMAA',
      meta: [
        { name: 'description', content: 'Kata Izori video and description' },
        
      ],
    
    }
  }
}
</script>
