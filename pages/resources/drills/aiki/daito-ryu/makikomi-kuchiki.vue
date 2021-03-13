<template>
  <div>
    
    <main>
      <mp4page TITLE="Makikomi Kuchiki" />
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
      title: 'Makikomi Kuchiki | CMAA',
      meta: [
        { name: 'description', content: 'Kata Makikomi Kuchiki video and description' },
        
      ],
    
    }
  }
}
</script>
