<template>
  <div>
    
    <main>
      <mp4page TITLE="Yorimi" />
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
      title: 'Yorimi | CMAA',
      meta: [
        { name: 'description', content: 'Kata Yorimi video and description' },
        
      ],
    
    }
  }
}
</script>
