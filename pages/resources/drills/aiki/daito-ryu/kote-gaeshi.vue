<template>
  <div>
    
    <main>
      <mp4page TITLE="Kote Gaeshi" />
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
      title: 'Kote Gaeshi | CMAA',
      meta: [
        { name: 'description', content: 'Kata Kote Gaeshi video and description' },
        
      ],
    
    }
  }
}
</script>
