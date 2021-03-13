<template>
  <div>
    
    <main>
      <mp4page TITLE="Wansu" SRC="1-nuPTEaxaSSSU1YqnplsjaMYmdhO9BMr"/>
    </main>
    
  </div>
</template>

<script>
import mp4page from '~/components/mp4page.vue'
export default {
    
  components: {
    mp4page
  },
  mounted(){
    if(!this.$store.getters.isAuth || (!(this.$store.getters.admin || this.$store.getters.sensei) && this.$store.getters.rankKarate < 3)){
      this.$router.push('/')
    }
  },
  head () {
    return {
      title: 'Wansu | CMAA',
      meta: [
        { name: 'description', content: 'Kata Wansu video and description' },
        
      ],
    
    }
  }
}
</script>
