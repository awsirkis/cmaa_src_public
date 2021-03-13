<template>
  <div>
    
    <main>
      <article>
        <h1>MCMAP Green Belt Knife Drills</h1>
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
      title: 'MCMAP Green Belt Knife | CMAA',
      meta: [
        { name: 'description', content: 'Various MCMAP Green Belt Knife drills' },
        
      ],
    
    }
  }
}
</script>
