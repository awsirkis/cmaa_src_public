<template>
  <div>
    
    <main>
      <mp4page SRC="1peNAl-6gfN2VycnbrMPBP1MOz4-BZUeT" TITLE="Kama Shodan" />
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
      title: 'Kama Shodan | CMAA',
      meta: [
        { name: 'description', content: 'Kata Kama Shodan video and description' },
        
      ],
    
    }
  }
}
</script>
