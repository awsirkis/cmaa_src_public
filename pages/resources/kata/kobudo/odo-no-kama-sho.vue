<template>
  <div>
    
    <main>
      <mp4page TITLE="Odo no Kama Sho" />
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
      title: 'Odo no Kama Sho | CMAA',
      meta: [
        { name: 'description', content: 'Kata Odo no Kama Sho video and description' },
        
      ],
    
    }
  }
}
</script>
