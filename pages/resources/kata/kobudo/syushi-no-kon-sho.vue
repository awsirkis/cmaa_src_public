<template>
  <div>
    
    <main>
      <mp4page SRC="1P5Eha3ek6S6840MItur-txkKCjjDSLjl" TITLE="Syushi no Kon Sho" />
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
      title: 'Syushi no Kon Sho | CMAA',
      meta: [
        { name: 'description', content: 'Kata Syushi no Kon Sho video and description' },
        
      ],
    
    }
  }
}
</script>
