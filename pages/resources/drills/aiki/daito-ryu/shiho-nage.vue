<template>
  <div>
    
    <main>
      <mp4page TITLE="Shiho Nage" />
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
      title: 'Shiho Nage | CMAA',
      meta: [
        { name: 'description', content: 'Kata Shiho Nage video and description' },
        
      ],
    
    }
  }
}
</script>
