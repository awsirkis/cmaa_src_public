<template>
  <div>
    
    <main>
      <article>
        <h1>Yokajo Drills</h1>
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
  head () {
    return {
      title: 'Yokajo | CMAA',
      meta: [
        { name: 'description', content: 'Various Yokajo drills' },
        
      ],
    
    }
  }
}
</script>
