<template>
  <div>
    
    <main>
      <article>
        <h1>Nikajo Drills</h1>
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
      title: 'Nikajo | CMAA',
      meta: [
        { name: 'description', content: 'Various Nikajo drills' },
        
      ],
    
    }
  }
}
</script>
