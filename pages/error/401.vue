<template>
  <div>
    
    <main>
       <h1>
              Error 401: Authorization Required
          </h1>
          <p>
              Looks like ya tried to go to a page you can't use! This page may only be able to be accessed by CMAA staff, so try accessing a page you're meant to.
          </p>   
    </main>
    
  </div>
</template>

<script>
export default {
  head () {
    return {
      title: 'ERROR 401 | CMAA',
      meta: [
        { name: 'description', content: 'Error Page' },
        
      ],
    
    }
  }
}
</script>
