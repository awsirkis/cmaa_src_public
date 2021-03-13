<template>
  <div>
    
    <main>
      <mp4page TITLE="Double Elbow Block" />
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
      title: 'Double Elbow Block | CMAA',
      meta: [
        { name: 'description', content: 'Kata Double Elbow Block video and description' },
        
      ],
    
    }
  }
}
</script>
