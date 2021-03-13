<template>
  <div>
    
    <main>
      <mp4page TITLE="Kakahashi" />
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
      title: 'Kakahashi | CMAA',
      meta: [
        { name: 'description', content: 'Kata Kakahashi video and description' },
        
      ],
    
    }
  }
}
</script>
