<template>
  <div>
    
    <main>
      <mp4page TITLE="Tachigari" />
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
      title: 'Tachigari | CMAA',
      meta: [
        { name: 'description', content: 'Kata Tachigari video and description' },
        
      ],
    
    }
  }
}
</script>
