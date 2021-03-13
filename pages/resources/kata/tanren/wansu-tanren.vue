<template>
  <div>
    
    <main>
      <mp4page TITLE="Wansu Tan Ren" SRC="1ovjIKI5pC9Va05C6_caMljfTOvaERYGn"/>
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
      title: 'Wansu | CMAA',
      meta: [
        { name: 'description', content: 'Kata Wansu Tan Ren video and description' },
        
      ],
    
    }
  }
}
</script>
