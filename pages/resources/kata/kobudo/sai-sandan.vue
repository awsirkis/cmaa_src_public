<template>
  <div>
    
    <main>
      <mp4page SRC="1zI7Ho1nYga08l_DeaTZLXaQ0Q_hlwPDk" TITLE="Sai Sandan" />
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
    if(!this.$store.getters.isAuth || (!(this.$store.getters.admin || this.$store.getters.sensei) && this.$store.getters.rankKarate < 10)){
      this.$router.push('/')
    }
  },
  head () {
    return {
      title: 'Sai Sandan | CMAA',
      meta: [
        { name: 'description', content: 'Kata Sai Sandan video and description' },
        
      ],
    
    }
  }
}
</script>
