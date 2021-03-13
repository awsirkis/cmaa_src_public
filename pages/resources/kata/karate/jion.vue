<template>
  <div>
    
    <main>
      <mp4page TITLE="Jion" SRC="1INkSxeSRFdbDOPQU1GVsCBZzrIcDQ2KV"/>
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
      title: 'Jion | CMAA',
      meta: [
        { name: 'description', content: 'Kata Jion video and description' },
        
      ],
    
    }
  }
}
</script>
