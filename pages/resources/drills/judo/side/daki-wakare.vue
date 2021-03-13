<template>
  <div>
    
    <main>
      <mp4page TITLE="Daki Wakare" />
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
      title: 'Daki Wakare | CMAA',
      meta: [
        { name: 'description', content: 'Kata Daki Wakare video and description' },
        
      ],
    
    }
  }
}
</script>
