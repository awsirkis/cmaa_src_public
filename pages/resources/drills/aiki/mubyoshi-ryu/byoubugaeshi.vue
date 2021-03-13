<template>
  <div>
    
    <main>
      <mp4page TITLE="Byoubugaeshi" />
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
      title: 'Byoubugaeshi | CMAA',
      meta: [
        { name: 'description', content: 'Kata Byoubugaeshi video and description' },
        
      ],
    
    }
  }
}
</script>
