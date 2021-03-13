<template>
  <div>
    
    <main>
      <mp4page TITLE="Tsuri Goshi" />
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
      title: 'Tsuri Goshi | CMAA',
      meta: [
        { name: 'description', content: 'Kata Tsuri Goshi video and description' },
        
      ],
    
    }
  }
}
</script>
