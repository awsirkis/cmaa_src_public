<template>
  <div>
    
    <main>
      <mp4page TITLE="Tokushin no Nunti Bo" />
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
    if(!this.$store.getters.isAuth || (!(this.$store.getters.admin || this.$store.getters.sensei) && this.$store.getters.rankKarate < 9)){
      this.$router.push('/')
    }
  },
  head () {
    return {
      title: 'Tokushin no Nunti Bo | CMAA',
      meta: [
        { name: 'description', content: 'Kata Tokushin no Nunti Bo video and description' },
        
      ],
    
    }
  }
}
</script>
