<template>
  <div>
    
    <main>
      <mp4page TITLE="Pin'an Nidan Tan Ren" SRC="1RUqusvJMFslPQMALeh95ePJWOqnJMRoY"/>
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
    if(!this.$store.getters.isAuth || (!(this.$store.getters.admin || this.$store.getters.sensei) && this.$store.getters.rankKarate < 7)){
      this.$router.push('/')
    }
  },
  head () {
    return {
      title: 'Pin\'an Nidan | CMAA',
      meta: [
        { name: 'description', content: 'Kata Pin\'an Nidan Tan Ren video and description' },
        
      ],
    
    }
  }
}
</script>
