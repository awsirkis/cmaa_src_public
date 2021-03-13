<template>
  <div>
    
    <main>
      <article>
        <h1>Silat Drills</h1>
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
      title: 'Silat | CMAA',
      meta: [
        { name: 'description', content: 'Various Silat drills' },
        
      ],
    
    }
  }
}
</script>
