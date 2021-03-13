<template>
  <div>
    
    <main>
        <h1>
              Error 501: Not Implemented
          </h1>
          <p>
              Seems like we don't have the functionality you're looking for! We should have everything needed for our site, however in the event you aren't a lost wanderer, then you can request more features in our <nuxt-link to="/contact/">contact</nuxt-link> section.
          </p>    
    </main>
    
  </div>
</template>

<script>
export default {
  head () {
    return {
      title: 'ERROR 501 | CMAA',
      meta: [
        { name: 'description', content: 'Error Page' },
        
      ],
    
    }
  }
}
</script>
