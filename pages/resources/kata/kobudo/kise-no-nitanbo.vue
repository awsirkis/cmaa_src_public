<template>
  <div>
    
    <main>
      <mp4page SRC="1iIbhDgmaXLR-Wx8uhgeSTJyPKQ82Beu2" TITLE="Kise no Nitambo" />
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
      title: 'Kise no Nitambo | CMAA',
      meta: [
        { name: 'description', content: 'Kata Kise no Nitambo video and description' },
        
      ],
    
    }
  }
}
</script>
