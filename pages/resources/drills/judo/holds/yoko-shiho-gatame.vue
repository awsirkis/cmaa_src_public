<template>
  <div>
    
    <main>
      <mp4page TITLE="Yoko Shiho Gatame" />
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
      title: 'Yoko Shiho Gatame | CMAA',
      meta: [
        { name: 'description', content: 'Kata Yoko Shiho Gatame video and description' },
        
      ],
    
    }
  }
}
</script>
