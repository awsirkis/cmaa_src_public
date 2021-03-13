<template>
  <div>
    
    <main>
      <mp4page TITLE="Sok Tong" />
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
      title: 'Sok Tong | CMAA',
      meta: [
        { name: 'description', content: 'Kata Sok Tong video and description' },
        
      ],
    
    }
  }
}
</script>
