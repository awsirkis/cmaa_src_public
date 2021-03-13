<template>
  <div>
    
    <main>
      <mp4page TITLE="Eku Kihon Ichi" />
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
    if(!this.$store.getters.isAuth || (!(this.$store.getters.admin || this.$store.getters.sensei) && this.$store.getters.rankKarate < 9)){
      this.$router.push('/')
    }
  },
  head () {
    return {
      title: 'Eku Kihon Ichi | CMAA',
      meta: [
        { name: 'description', content: 'Kata Eku Kihon Ichi video and description' },
        
      ],
    
    }
  }
}
</script>
