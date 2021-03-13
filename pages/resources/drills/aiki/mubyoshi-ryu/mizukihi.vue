<template>
  <div>
    
    <main>
      <mp4page TITLE="Mizukihi" />
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
      title: 'Mizukihi | CMAA',
      meta: [
        { name: 'description', content: 'Kata Mizukihi video and description' },
        
      ],
    
    }
  }
}
</script>
