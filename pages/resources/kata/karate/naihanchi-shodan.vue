<template>
  <div>
    
    <main>
      <mp4page TITLE="Naihanchi Shodan" SRC="1JcB6fedW31gLCsJ4G9P4B-dygrt8jLkY"/>
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
    if(!this.$store.getters.isAuth || (!(this.$store.getters.admin || this.$store.getters.sensei) && this.$store.getters.rankKarate < 6)){
      this.$router.push('/')
    }
  },
  head () {
    return {
      title: 'Nahanchi Shodan | CMAA',
      meta: [
        { name: 'description', content: 'Kata Nahanchi Shodan video and description' },
        
      ],
    
    }
  }
}
</script>
