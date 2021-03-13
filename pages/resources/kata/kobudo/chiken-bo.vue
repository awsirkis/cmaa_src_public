<template>
  <div>
    
    <main>
      <mp4page SRC="1xDcp73pkmvtW1TSbhVai3ngAqoBwVXcG" TITLE="Chiken Bo" />
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
      title: 'Chiken Bo | CMAA',
      meta: [
        { name: 'description', content: 'Kata Chiken Bo video and description' },
        
      ],
    
    }
  }
}
</script>
