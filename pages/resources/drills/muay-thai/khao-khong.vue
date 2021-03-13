<template>
  <div>
    
    <main>
      <mp4page TITLE="Khao Khong" />
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
      title: 'Khao Khong | CMAA',
      meta: [
        { name: 'description', content: 'Kata Khao Khong video and description' },
        
      ],
    
    }
  }
}
</script>
