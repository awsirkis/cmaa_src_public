<template>
  <div>
    
    <main>
      <mp4page SRC="1SCW9ZElb_U8dK2ZdY0J-TokGSivbNz4O" TITLE="Sai Nidan"  />
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
    if(!this.$store.getters.isAuth || (!(this.$store.getters.admin || this.$store.getters.sensei) && this.$store.getters.rankKarate < 6)){
      this.$router.push('/')
    }
  },
  head () {
    return {
      title: 'Sai Nidan | CMAA',
      meta: [
        { name: 'description', content: 'Kata Sai Nidan video and description' },
        
      ],
    
    }
  }
}
</script>
