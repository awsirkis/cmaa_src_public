<template>
  <div>
    
    <main>
      <mp4page TITLE="Kradot Thip" />
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
      title: 'Kradot Thip | CMAA',
      meta: [
        { name: 'description', content: 'Kata Kradot Thip video and description' },
        
      ],
    
    }
  }
}
</script>
