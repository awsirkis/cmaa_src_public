<template>
  <div>
    
    <main>
      <mp4page TITLE="Pin'an Shodan" SRC="1ht9LVndXurS0nrlJn9XlRncmZ6WWaBuX"/>
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
    if(!this.$store.getters.isAuth || (!(this.$store.getters.admin || this.$store.getters.sensei) && this.$store.getters.rankKarate < 14)){
      this.$router.push('/')
    }
  },
  head () {
    return {
      title: 'Pin\'an Shodan | CMAA',
      meta: [
        { name: 'description', content: 'Kata Pin\'an Shodan video and description' },
        
      ],
    
    }
  }
}
</script>

not auth OR not ranked
