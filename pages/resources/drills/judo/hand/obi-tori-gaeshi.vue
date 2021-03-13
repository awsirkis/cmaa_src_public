<template>
  <div>
    
    <main>
      <mp4page TITLE="Obi Tori Gaeshi" />
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
      title: 'Obi Tori Gaeshi | CMAA',
      meta: [
        { name: 'description', content: 'Kata Obi Tori Gaeshi video and description' },
        
      ],
    
    }
  }
}
</script>
