<template>
  <div>
    
    <main>
      <mp4page TITLE="Uchi Makikomi" />
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
      title: 'Uchi Makikomi | CMAA',
      meta: [
        { name: 'description', content: 'Kata Uchi Makikomi video and description' },
        
      ],
    
    }
  }
}
</script>
