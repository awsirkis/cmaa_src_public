<template>
  <div>
    
    <main>
      <mp4page TITLE="Gekisaidai Ni" SRC="1NlgyI-06mS194W9c7_6AVQ1bVOJp0vjf"/>
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
    if(!this.$store.getters.isAuth || (!(this.$store.getters.admin || this.$store.getters.sensei) && this.$store.getters.rankKarate < 4)){
      this.$router.push('/')
    }
  },
  head () {
    return {
      title: 'Gekisaidai Ni | CMAA',
      meta: [
        { name: 'description', content: 'Kata Gekisaidai Ni video and description' },
        
      ],
    
    }
  }
}
</script>
