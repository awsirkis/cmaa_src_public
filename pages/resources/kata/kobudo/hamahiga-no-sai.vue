<template>
  <div>
    
    <main>
      <mp4page SRC="1BoZ5U9AlHlQryIoTe_01Klznuqv1g5hG" TITLE="Hamahiga no Sai"/>
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
    if(!this.$store.getters.isAuth || (!(this.$store.getters.admin || this.$store.getters.sensei) && this.$store.getters.rankKarate < 11)){
      this.$router.push('/')
    }
  },
  head () {
    return {
      title: 'Hamahiga no Sai  | CMAA',
      meta: [
        { name: 'description', content: 'Kata Hamahiga no Sai video and description' },
        
      ],
    
    }
  }
}
</script>
