<template>
  <div>
    
    <main>
      <mp4page TITLE="Pin'an Shodan Tan Ren" SRC="1-gxHq2eS8gNdHGiZ0vceKpBTrCK5CDNn"/>
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
      title: 'Pin\'an Shodan | CMAA',
      meta: [
        { name: 'description', content: 'Kata Pin\'an Shodan Tan Ren video and description' },
        
      ],
    
    }
  }
}
</script>
