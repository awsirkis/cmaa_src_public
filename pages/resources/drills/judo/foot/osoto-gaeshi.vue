<template>
  <div>
    
    <main>
      <mp4page TITLE="Osoto Gaeshi" />
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
      title: 'Osoto Gaeshi | CMAA',
      meta: [
        { name: 'description', content: 'Kata Osoto Gaeshi video and description' },
        
      ],
    
    }
  }
}
</script>
