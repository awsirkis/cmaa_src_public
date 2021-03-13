<template>
  <div>
    
    <main>
      <mp4page TITLE="Soken no Nunchaku" />
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
    if(!this.$store.getters.isAuth || (!(this.$store.getters.admin || this.$store.getters.sensei) && this.$store.getters.rankKarate < 13)){
      this.$router.push('/')
    }
  },
  head () {
    return {
      title: 'Soken no Nunchaku | CMAA',
      meta: [
        { name: 'description', content: 'Soken no Nunchaku video and description' },
        
      ],
    
    }
  }
}
</script>
