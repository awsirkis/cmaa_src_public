<template>
  <div>
    
    <main>
      <mp4page TITLE="Gyaku Gasso" />
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
      title: 'Gyaku Gasso | CMAA',
      meta: [
        { name: 'description', content: 'Kata Gyaku Gasso video and description' },
        
      ],
    
    }
  }
}
</script>
