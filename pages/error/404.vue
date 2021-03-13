<template>
  <div>
    
    <main>
      <article>
          <h1>
              Error 404: Page Not Found
          </h1>
          <p>
              Looks like ya tried to go to a fake page! Luckily, we have many real pages that you can use!
          </p>
      </article>
    </main>
    
  </div>
</template>

<script>
export default {
  head () {
    return {
      title: 'ERROR 404 | CMAA',
      meta: [
        { name: 'description', content: 'Error Page' },
        
      ],
    
    }
  }
}
</script>
