<template>
  <div>
    
    <main>
      <mp4page TITLE="Kuzure Kami Shiho Gatame" />
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
      title: 'Kuzure Kami Shiho Gatame | CMAA',
      meta: [
        { name: 'description', content: 'Kata Kuzure Kami Shiho Gatame video and description' },
        
      ],
    
    }
  }
}
</script>
