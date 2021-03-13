<template>
  <div>
    
    <main>
      <mp4page TITLE="Fukyu Kata San" SRC="1UG2tmUipCM8WU4H90oJ3oWra1TGKd_Cu"/>
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
    if(!this.$store.getters.isAuth || (!(this.$store.getters.admin || this.$store.getters.sensei) && this.$store.getters.rankKarate < 2)){
      this.$router.push('/')
    }
  },
  head () {
    return {
      title: 'Fukyu Kata San | CMAA',
      meta: [
        { name: 'description', content: 'Kata Fukyu Kata San video and description' },
        
      ],
    
    }
  }
}
</script>
