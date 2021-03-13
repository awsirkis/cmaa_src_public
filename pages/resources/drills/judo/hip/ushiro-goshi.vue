<template>
  <div>
    
    <main>
      <mp4page TITLE="Ushiro Goshi" />
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
      title: 'Ushiro Goshi | CMAA',
      meta: [
        { name: 'description', content: 'Kata Ushiro Goshi video and description' },
        
      ],
    
    }
  }
}
</script>
