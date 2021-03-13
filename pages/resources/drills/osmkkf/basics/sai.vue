<template>
  <div>
    
    <main>
      <mp4page TITLE="Sai Basics" />
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
      title: 'Sai Basics | CMAA',
      meta: [
        { name: 'description', content: 'Sai Basics video and description' },
        
      ],
    
    }
  }
}
</script>
