<template>
  <div>
    
    <main>
      <mp4page TITLE="Gyaku Gote" />
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
      title: 'Gyaku Gote | CMAA',
      meta: [
        { name: 'description', content: 'Kata Gyaku Gote video and description' },
        
      ],
    
    }
  }
}
</script>
