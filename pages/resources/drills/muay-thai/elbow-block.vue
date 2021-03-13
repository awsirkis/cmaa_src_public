<template>
  <div>
    
    <main>
      <mp4page TITLE="Elbow Block" />
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
      title: 'Elbow Block | CMAA',
      meta: [
        { name: 'description', content: 'Kata Elbow Block video and description' },
        
      ],
    
    }
  }
}
</script>
