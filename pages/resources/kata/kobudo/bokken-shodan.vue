<template>
  <div>
    
    <main>
      <mp4page SRC="1KGWo04JMT7WCaGYTCz9b_6BC0tOci8Vh" TITLE="Bokken Shodan" />
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
      title: 'Bokken Shodan | CMAA',
      meta: [
        { name: 'description', content: 'Kata Bokken Shodan video and description' },
        
      ],
    
    }
  }
}
</script>
