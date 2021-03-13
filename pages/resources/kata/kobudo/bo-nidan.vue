<template>
  <div>
    
    <main>
      <mp4page SRC="1z62rLGMKcPAXuP_r4iOjsgmrBoVE7i9t" TITLE="Bo Nidan" />
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
    if(!this.$store.getters.isAuth || (!(this.$store.getters.admin || this.$store.getters.sensei) && this.$store.getters.rankKarate < 4)){
      this.$router.push('/')
    }
  },
  head () {
    return {
      title: 'Bo Nidan | CMAA',
      meta: [
        { name: 'description', content: 'Kata Bo Nidan video and description' },
        
      ],
    
    }
  }
}
</script>
