<template>
  <div>
    
    <main>
      <mp4page TITLE="Nijushiho" SRC="1xN-hIRn0R1eRgyb6_wq-UIxQ9jFN1YvQ"/>
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
      title: 'Nijushiho | CMAA',
      meta: [
        { name: 'description', content: 'Kata Nijushiho video and description' },
        
      ],
    
    }
  }
}
</script>
