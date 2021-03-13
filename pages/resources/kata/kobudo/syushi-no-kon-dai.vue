<template>
  <div>
    
    <main>
      <mp4page TITLE="Syushi no Kon Dai" />
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
    if(!this.$store.getters.isAuth || (!(this.$store.getters.admin || this.$store.getters.sensei) && this.$store.getters.rankKarate < 12)){
      this.$router.push('/')
    }
  },
  head () {
    return {
      title: 'Syushi no Kon Dai | CMAA',
      meta: [
        { name: 'description', content: 'Kata Syushi no Kon Dai video and description' },
        
      ],
    
    }
  }
}
</script>
