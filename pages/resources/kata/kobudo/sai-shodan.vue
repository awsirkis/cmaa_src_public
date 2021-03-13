<template>
  <div>
    
    <main>
      <mp4page SRC="17w6P7y9zcN-4CVEVdmkkasen7xxuimnL" TITLE="Sai Shodan" />
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
    if(!this.$store.getters.isAuth || (!(this.$store.getters.admin || this.$store.getters.sensei) && this.$store.getters.rankKarate < 5)){
      this.$router.push('/')
    }
  },
  head () {
    return {
      title: 'Sai Shodan | CMAA',
      meta: [
        { name: 'description', content: 'Kata Sai Shodan video and description' },
        
      ],
    
    }
  }
}
</script>
