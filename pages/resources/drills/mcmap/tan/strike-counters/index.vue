<template>
  <div>
    
    <main>
      <article>
        <h1>MCMAP Tan Belt Strike Counters Drills</h1>
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
      title: 'MCMAP Tan Belt Strike Counters | CMAA',
      meta: [
        { name: 'description', content: 'Various MCMAP Tan Belt Strike Counters drills' },
        
      ],
    
    }
  }
}
</script>
