<template>
  <div>
    
    <main>
      <mp4page SRC="1U-sixym6znzU1Ku33E0j-unLSATGSyaE" TITLE="Ananku Tan Ren" />
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
      title: 'Ananku Tan Ren | CMAA',
      meta: [
        { name: 'description', content: 'Kata Ananku Tan Ren video and description' },
        
      ],
    
    }
  }
}
</script>
