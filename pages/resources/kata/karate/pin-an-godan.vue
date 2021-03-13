<template>
  <div>
    
    <main>
      <mp4page TITLE="Pin-an Godan" SRC="10-IUXKhlfrRrqgJnxzK5obDfExTcTkCG"/>
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
      title: 'Pin\'an Godan | CMAA',
      meta: [
        { name: 'description', content: 'Kata Pin\'an Godan video and description' },
        
      ],
    
    }
  }
}
</script>
