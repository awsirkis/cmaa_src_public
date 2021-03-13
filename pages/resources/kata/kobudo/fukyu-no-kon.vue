<template>
  <div>
    
    <main>
      <mp4page SRC="1RwwT895JNe-8UJcVQwfjKm4ttAB10P8W" TITLE="Fukyu no Kon" />
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
      title: 'Fukyu no Kon | CMAA',
      meta: [
        { name: 'description', content: 'Kata Fukyu no Kon video and description' },
        
      ],
    
    }
  }
}
</script>
