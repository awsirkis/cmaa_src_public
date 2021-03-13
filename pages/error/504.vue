<template>
  <div>
    
    <main>
        <h1>
              Error 504: Gateway Timeout
          </h1>
          <p>
              There was some long delay communicating between servers. This may be due to a borken connection or server. Try again later!
          </p>    
    </main>
    
  </div>
</template>

<script>
export default {
  head () {
    return {
      title: 'ERROR 504 | CMAA',
      meta: [
        { name: 'description', content: 'Error Page' },
        
      ],
    
    }
  }
}
</script>
