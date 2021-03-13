<template>
  <div>
    
    <main>
      <article>
        <h1>MCMAP Brown Belt Ground Fighting Drills</h1>
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
      title: 'MCMAP Brown Belt Ground Fighting | CMAA',
      meta: [
        { name: 'description', content: 'Various MCMAP Brown Belt Ground Fighting drills' },
        
      ],
    
    }
  }
}
</script>
