<template>
  <div>
    
    <main>
      <mp4page TITLE="Kama Nindan" />
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
    if(!this.$store.getters.isAuth || (!(this.$store.getters.admin || this.$store.getters.sensei) && this.$store.getters.rankKarate < 12)){
      this.$router.push('/')
    }
  },
  head () {
    return {
      title: 'Kama Nidan | CMAA',
      meta: [
        { name: 'description', content: 'Kata Kama Nidan video and description' },
        
      ],
    
    }
  }
}
</script>
