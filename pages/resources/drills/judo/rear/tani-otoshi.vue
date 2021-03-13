<template>
  <div>
    
    <main>
      <mp4page TITLE="Tani Otoshi" />
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
      title: 'Tani Otoshi | CMAA',
      meta: [
        { name: 'description', content: 'Kata Tani Otoshi video and description' },
        
      ],
    
    }
  }
}
</script>
