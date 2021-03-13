<template>
  <div>
    
    <main>
      <mp4page TITLE="Eshigu e Nunti" />
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
      title: 'Eshigu e Nunti | CMAA',
      meta: [
        { name: 'description', content: 'Kata Eshigu e Nunti video and description' },
        
      ],
    
    }
  }
}
</script>
