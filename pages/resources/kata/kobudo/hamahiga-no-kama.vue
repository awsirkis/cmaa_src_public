<template>
  <div>
    
    <main>
      <mp4page SRC="1hSJuMVyGA4E2a5UPLrknJKjt3_fyWWdm" TITLE="Hamahiga no Kama"/>
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
      title: 'Hamahiga no Kama | CMAA',
      meta: [
        { name: 'description', content: 'Kata Hamahiga no Kama video and description' },
        
      ],
    
    }
  }
}
</script>
