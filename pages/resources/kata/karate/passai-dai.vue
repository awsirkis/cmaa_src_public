<template>
  <div>
    
    <main>
      <mp4page TITLE="Passai Dai" SRC="1AXewDl4IfGkUoQQbs3wrRT11Q71dMKko"/>
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
      title: 'Passai Dai | CMAA',
      meta: [
        { name: 'description', content: 'Kata Passai Dai video and description' },
        
      ],
    
    }
  }
}
</script>
