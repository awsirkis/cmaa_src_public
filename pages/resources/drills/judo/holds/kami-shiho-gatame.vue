<template>
  <div>
    
    <main>
      <mp4page TITLE="Kami Shiho Gatame" />
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
      title: 'Kami Shiho Gatame | CMAA',
      meta: [
        { name: 'description', content: 'Kata Kami Shiho Gatame video and description' },
        
      ],
    
    }
  }
}
</script>
