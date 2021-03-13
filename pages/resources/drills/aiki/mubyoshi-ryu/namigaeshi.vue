<template>
  <div>
    
    <main>
      <mp4page TITLE="Namigaeshi" />
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
      title: 'Namigaeshi | CMAA',
      meta: [
        { name: 'description', content: 'Kata Namigaeshi video and description' },
        
      ],
    
    }
  }
}
</script>
