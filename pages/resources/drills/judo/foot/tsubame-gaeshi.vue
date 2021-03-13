<template>
  <div>
    
    <main>
      <mp4page TITLE="Tsubame Gaeshi" />
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
      title: 'Tsubame Gaeshi | CMAA',
      meta: [
        { name: 'description', content: 'Kata Tsubame Gaeshi video and description' },
        
      ],
    
    }
  }
}
</script>
