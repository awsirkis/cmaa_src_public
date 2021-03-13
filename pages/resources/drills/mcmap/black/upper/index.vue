<template>
  <div>
    
    <main>
      <article>
        <h1>MCMAP Black Belt Upper Body Drills</h1>
      </article>
      <div class="container-fluid">
          <div class="row justify-content-center text-center">
          </div>
        </div>
    </main>
    
  </div>
</template>

<script>import linkbutton from '~/components/linkbutton.vue'
export default {
    
  components: {
    linkbutton
  },
  mounted(){
    this.$router.push('../')
  },
  head () {
    return {
      title: 'MCMAP Black Belt Upper Body | CMAA',
      meta: [
        { name: 'description', content: 'Various MCMAP Black Belt Upper Body drills' },
        
      ],
    
    }
  }
}
</script>
