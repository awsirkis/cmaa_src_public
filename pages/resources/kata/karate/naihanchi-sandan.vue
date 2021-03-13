<template>
  <div>
    
    <main>
      <mp4page TITLE="Naihanchi Sandan" SRC="1QwKJJl_qz3j4jycD0T1hTaEMSCJ8uDaA"/>
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
    if(!this.$store.getters.isAuth || (!(this.$store.getters.admin || this.$store.getters.sensei) && this.$store.getters.rankKarate < 8)){
      this.$router.push('/')
    }
  },
  head () {
    return {
      title: 'Nahanchi Sandan | CMAA',
      meta: [
        { name: 'description', content: 'Kata Nahanchi Sandan video and description' },
        
      ],
    
    }
  }
}
</script>
