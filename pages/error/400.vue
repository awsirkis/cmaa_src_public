<template>
  <div>
    
    <main>
        <h1>
              Error 400: Bad Request
          </h1>
          <p>
              Seems like we don't like something you did! Since we don't use cookies, try accessing a normal page, OR check your firewall settings!
          </p>    
    </main>
    
  </div>
</template>

<script>
export default {
  head () {
    return {
      title: 'ERROR 400 | CMAA',
      meta: [
        { name: 'description', content: 'Error Page' },
        
      ],
    
    }
  }
}
</script>
