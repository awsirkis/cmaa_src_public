<template>
  <div>
    
    <main>
      <mp4page TITLE="Uchi Mata Makikomi" />
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
    if(!this.$store.getters.isAuth){
      this.$router.push('/')
    }
  },
  head () {
    return {
      title: 'Uchi Mata Makikomi | CMAA',
      meta: [
        { name: 'description', content: 'Kata Uchi Mata Makikomi video and description' },
        
      ],
    
    }
  }
}
</script>
