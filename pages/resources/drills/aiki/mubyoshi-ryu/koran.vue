<template>
  <div>
    
    <main>
      <mp4page TITLE="Koran" />
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
      title: 'Koran | CMAA',
      meta: [
        { name: 'description', content: 'Kata Koran video and description' },
        
      ],
    
    }
  }
}
</script>
