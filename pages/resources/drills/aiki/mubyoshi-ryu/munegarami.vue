<template>
  <div>
    
    <main>
      <mp4page TITLE="Mune Garami" />
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
      title: 'Mune Garami | CMAA',
      meta: [
        { name: 'description', content: 'Kata Mune Garami video and description' },
        
      ],
    
    }
  }
}
</script>
