<template>
  <div>
    
    <main>
      <mp4page TITLE="Furimi" />
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
      title: 'Furimi | CMAA',
      meta: [
        { name: 'description', content: 'Kata Furimi video and description' },
        
      ],
    
    }
  }
}
</script>
