<template>
  <div>
    
    <main>
      <mp4page TITLE="Ushiro Ryote Dori - Aiki Nage" />
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
      title: 'Ushiro Ryote Dori - Aiki Nage | CMAA',
      meta: [
        { name: 'description', content: 'Kata Ushiro Ryote Dori - Aiki Nage video and description' },
        
      ],
    
    }
  }
}
</script>
