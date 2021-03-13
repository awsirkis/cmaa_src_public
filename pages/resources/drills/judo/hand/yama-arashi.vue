<template>
  <div>
    
    <main>
      <mp4page TITLE="Yama Arashi" />
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
      title: 'Yama Arashi | CMAA',
      meta: [
        { name: 'description', content: 'Kata Yama Arashi video and description' },
        
      ],
    
    }
  }
}
</script>
