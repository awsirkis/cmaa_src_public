<template>
  <div>
    
    <main>
      <mp4page TITLE="Inside Leg Block" />
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
      title: 'Inside Leg Block | CMAA',
      meta: [
        { name: 'description', content: 'Kata Inside Leg Block video and description' },
        
      ],
    
    }
  }
}
</script>
