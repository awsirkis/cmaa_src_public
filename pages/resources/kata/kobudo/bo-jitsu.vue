<template>
  <div>
    
    <main>
      <mp4page SRC="11e6zOpdNdgPHriRfsG3elRiwaYdcGUP_" TITLE="Bo Jitsu" />
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
      title: 'Bo Jitsu | CMAA',
      meta: [
        { name: 'description', content: 'Kata Bo Jitsu video and description' },
        
      ],
    
    }
  }
}
</script>
