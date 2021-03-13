<template>
  <div>
    
    <main>
      <mp4page TITLE="Buttou" />
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
      title: 'Buttou | CMAA',
      meta: [
        { name: 'description', content: 'Kata Buttou video and description' },
        
      ],
    
    }
  }
}
</script>
