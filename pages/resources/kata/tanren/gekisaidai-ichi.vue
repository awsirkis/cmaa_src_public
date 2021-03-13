<template>
  <div>
    
    <main>
      <mp4page SRC="1zkpRXoSHC_TmqPPLTU3v3DbzDNQXOwa3" TITLE="Gekisaidai Ichi" />
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
    if(!this.$store.getters.isAuth || (!(this.$store.getters.admin || this.$store.getters.sensei) && this.$store.getters.rankKarate < 3)){
      this.$router.push('/')
    }
  },
  head () {
    return {
      title: 'Gekisaidai Ichi | CMAA',
      meta: [
        { name: 'description', content: 'Kata Gekisaidai Ichi video and description' },
        
      ],
    
    }
  }
}
</script>
