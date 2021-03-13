<template>
  <div>
    
    <main>
      <mp4page TITLE="Sakugawa no Kon Sho" />
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
    if(!this.$store.getters.isAuth || (!(this.$store.getters.admin || this.$store.getters.sensei) && this.$store.getters.rankKarate < 14)){
      this.$router.push('/')
    }
  },
  head () {
    return {
      title: 'Sakugawa no Kon Sho | CMAA',
      meta: [
        { name: 'description', content: 'Kata Sakugawa no Kon Sho video and description' },
        
      ],
    
    }
  }
}
</script>
