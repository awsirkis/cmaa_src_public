<template>
  <div>
    
    <main>
      <mp4page TITLE="Osoto Makikomi" />
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
      title: 'Osoto Makikomi | CMAA',
      meta: [
        { name: 'description', content: 'Kata Osoto Makikomi video and description' },
        
      ],
    
    }
  }
}
</script>
