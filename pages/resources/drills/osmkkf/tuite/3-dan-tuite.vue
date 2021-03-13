<template>
  <div>
    
    <main>
      <mp4page TITLE="3rd Dan Tuite"/>
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
      title: '3rd Dan Tuite | CMAA',
      meta: [
        { name: 'description', content: '3rd Dan Tuite video and description' },
        
      ],
    
    }
  }
}
</script>
