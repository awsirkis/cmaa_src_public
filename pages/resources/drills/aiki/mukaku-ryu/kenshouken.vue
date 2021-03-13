<template>
  <div>
    
    <main>
      <mp4page TITLE="Kenshouken" />
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
      title: 'Kenshouken | CMAA',
      meta: [
        { name: 'description', content: 'Kata Kenshouken video and description' },
        
      ],
    
    }
  }
}
</script>
