<template>
  <div>
    
    <main>
      <mp4page TITLE="Black Belt Ippon Kumite"/>
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
    if(!this.$store.getters.isAuth || (!(this.$store.getters.admin || this.$store.getters.sensei) && this.$store.getters.rankKarate < 10)){
      this.$router.push('/')
    }
  },
  head () {
    return {
      title: 'Black Belt Ippon Kumite | CMAA',
      meta: [
        { name: 'description', content: 'Black Belt Ippon Kumite video and description' },
        
      ],
    
    }
  }
}
</script>
