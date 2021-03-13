<template>
  <div>
    
    <main>
      <mp4page TITLE="Black Belt Basics"/>
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
    if(!this.$store.getters.isAuth || (!(this.$store.getters.admin || this.$store.getters.sensei) && this.$store.getters.rankKarate < 10)){
      this.$router.push('/')
    }
  },
  head () {
    return {
      title: 'Black Belt Basics | CMAA',
      meta: [
        { name: 'description', content: 'Black Belt Basics video and description' },
        
      ],
    
    }
  }
}
</script>
