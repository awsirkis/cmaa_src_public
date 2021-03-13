<template>
  <div>
    
    <main>
      <mp4page TITLE="Kurumagaeshi" />
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
      title: 'Kurumagaeshi | CMAA',
      meta: [
        { name: 'description', content: 'Kata Kurumagaeshi video and description' },
        
      ],
    
    }
  }
}
</script>
