<template>
  <div>
    
    <main>
      <mp4page TITLE="Tate Shiho Gatame" />
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
      title: 'Tate Shiho Gatame | CMAA',
      meta: [
        { name: 'description', content: 'Kata Tate Shiho Gatame video and description' },
        
      ],
    
    }
  }
}
</script>
