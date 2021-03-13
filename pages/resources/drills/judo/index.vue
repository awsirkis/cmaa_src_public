<template>
  <div>
    
    <main>
      <article>
        <h1>Judo Drills</h1>
      </article>
      <div class="container-fluid">
          <div class="row justify-content-center text-center">
          </div>
        </div>
    </main>
    
  </div>
</template>

<script>
import linkbutton from '~/components/linkbutton.vue'
export default {
    
  components: {
    linkbutton
  },
  mounted(){
    this.$router.push('./')
  },
  head () {
    return {
      title: 'Judo | CMAA',
      meta: [
        { name: 'description', content: 'Various Judo drills' },
        
      ],
    
    }
  }
}
</script>
