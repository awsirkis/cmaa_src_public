<template>
  <div>
    
    <main>
      <mp4page TITLE="Konoha Gaeshi" />
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
      title: 'Konoha Gaeshi | CMAA',
      meta: [
        { name: 'description', content: 'Kata Konoha Gaeshi video and description' },
        
      ],
    
    }
  }
}
</script>
