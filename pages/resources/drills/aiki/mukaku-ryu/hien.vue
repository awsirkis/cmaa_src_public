<template>
  <div>
    
    <main>
      <mp4page TITLE="Hien" />
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
      title: 'Hien | CMAA',
      meta: [
        { name: 'description', content: 'Kata Hien video and description' },
        
      ],
    
    }
  }
}
</script>
