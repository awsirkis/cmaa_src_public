<template>
  <div>
    
    <main>
      <mp4page TITLE="Pin'an Yondan" SRC="1epQHjufLH0flJM1vpYHwW_tkqb9YSMEl"/>
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
      title: 'Pin\'an Yondan | CMAA',
      meta: [
        { name: 'description', content: 'Kata Pin\'an Yondan video and description' },
        
      ],
    
    }
  }
}
</script>
