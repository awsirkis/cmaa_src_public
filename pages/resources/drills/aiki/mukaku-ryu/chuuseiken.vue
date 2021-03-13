<template>
  <div>
    
    <main>
      <mp4page TITLE="Chuuseiken" />
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
      title: 'Chuuseiken | CMAA',
      meta: [
        { name: 'description', content: 'Kata Chuuseiken video and description' },
        
      ],
    
    }
  }
}
</script>
