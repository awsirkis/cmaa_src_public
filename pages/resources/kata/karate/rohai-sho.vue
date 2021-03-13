<template>
  <div>
    
    <main>
      <mp4page TITLE="Rohai Sho" />
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
    if(!this.$store.getters.isAuth || (!(this.$store.getters.admin || this.$store.getters.sensei) && this.$store.getters.rankKarate < 15)){
      this.$router.push('/')
    }
  },
  head () {
    return {
      title: 'Rohai Sho | CMAA',
      meta: [
        { name: 'description', content: 'Kata Rohai Sho video and description' },
        
      ],
    
    }
  }
}
</script>
