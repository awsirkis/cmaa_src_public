<template>
  <div>
    
    <main>
      <mp4page TITLE="Tekko Kata" />
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
    if(!this.$store.getters.isAuth || (!(this.$store.getters.admin || this.$store.getters.sensei) && this.$store.getters.rankKarate < 13)){
      this.$router.push('/')
    }
  },
  head () {
    return {
      title: 'Tekko Kata | CMAA',
      meta: [
        { name: 'description', content: 'Tekko Kata video and description' },
        
      ],
    
    }
  }
}
</script>
