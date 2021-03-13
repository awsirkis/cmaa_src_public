<template>
  <div>
    
    <main>
      <mp4page TITLE="Kradot Chok" />
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
      title: 'Kradot Chok | CMAA',
      meta: [
        { name: 'description', content: 'Kata Kradot Chok video and description' },
        
      ],
    
    }
  }
}
</script>
