<template>
  <div>
    
    <main>
      <mp4page TITLE="Blue Belt Ippon Kumite"/>
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
      title: 'Blue Belt Ippon Kumite | CMAA',
      meta: [
        { name: 'description', content: 'Blue Belt Ippon Kumite video and description' },
        
      ],
    
    }
  }
}
</script>
