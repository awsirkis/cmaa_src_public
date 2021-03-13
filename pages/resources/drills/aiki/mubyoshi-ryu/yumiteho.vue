<template>
  <div>
    
    <main>
      <mp4page TITLE="Yumiteho" />
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
      title: 'Yumiteho | CMAA',
      meta: [
        { name: 'description', content: 'Kata Yumiteho video and description' },
        
      ],
    
    }
  }
}
</script>
