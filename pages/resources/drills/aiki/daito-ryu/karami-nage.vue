<template>
  <div>
    
    <main>
      <mp4page TITLE="Karami Nage" />
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
      title: 'Karami Nage | CMAA',
      meta: [
        { name: 'description', content: 'Kata Karami Nage video and description' },
        
      ],
    
    }
  }
}
</script>
