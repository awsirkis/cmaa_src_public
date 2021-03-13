<template>
  <div>
    
    <main>
      <mp4page SRC="1XGQbukTLO0Xq8fYAuGQF4ErebD-Em46W"  TITLE="Tonfa Shodan" />
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
    if(!this.$store.getters.isAuth || (!(this.$store.getters.admin || this.$store.getters.sensei) && this.$store.getters.rankKarate < 11)){
      this.$router.push('/')
    }
  },
  head () {
    return {
      title: 'Tonfa Shodan | CMAA',
      meta: [
        { name: 'description', content: 'Kata Tonfa Shodan video and description' },
        
      ],
    
    }
  }
}
</script>
