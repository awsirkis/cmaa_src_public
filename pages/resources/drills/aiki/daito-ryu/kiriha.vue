<template>
  <div>
    
    <main>
      <mp4page TITLE="Kiriha" />
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
      title: 'Kiriha | CMAA',
      meta: [
        { name: 'description', content: 'Kata Kiriha video and description' },
        
      ],
    
    }
  }
}
</script>
