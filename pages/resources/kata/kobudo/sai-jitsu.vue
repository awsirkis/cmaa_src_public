<template>
  <div>
    
    <main>
      <mp4page SRC="11tb8HFkYIlg6ex67-qYKUbLyWM1qhxqw" TITLE="Sai Jitsu" />
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
    if(!this.$store.getters.isAuth || (!(this.$store.getters.admin || this.$store.getters.sensei) && this.$store.getters.rankKarate < 7)){
      this.$router.push('/')
    }
  },
  head () {
    return {
      title: 'Sai Jitsu | CMAA',
      meta: [
        { name: 'description', content: 'Kata Sai Jitsu video and description' },
        
      ],
    
    }
  }
}
</script>
