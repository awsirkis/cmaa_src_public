<template>
  <div>
    
    <main>
      <mp4page TITLE="Kouchi Makikomi" />
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
      title: 'Kouchi Makikomi | CMAA',
      meta: [
        { name: 'description', content: 'Kata Kouchi Makikomi video and description' },
        
      ],
    
    }
  }
}
</script>
