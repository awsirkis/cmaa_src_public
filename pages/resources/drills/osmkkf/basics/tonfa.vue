<template>
  <div>
    
    <main>
      <mp4page TITLE="Tonfa Basics" />
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
      title: 'Tonfa Basics | CMAA',
      meta: [
        { name: 'description', content: 'Tonfa Basics video and description' },
        
      ],
    
    }
  }
}
</script>
