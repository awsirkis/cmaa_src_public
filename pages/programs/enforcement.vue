<template>
  <div>
    
    <main>
      <article>
        <h1>Law Enforcement</h1>
        <p></p>
      </article>
      <div class="container-fluid">
          <div class="row justify-content-center text-center">
          </div>
        </div>
    
    </main>
    
  </div>
</template>

<script>
import leftimage from '~/components/programleftimage.vue'
import rightimage from '~/components/programrightimage.vue'
export default {
    
  components: {
    leftimage,
    rightimage
  },
  head () {
    return {
      title: 'Law Enforcement | CMAA',
      meta: [
        { name: 'description', content: 'Law Enofrcement Training at Cascade Martial Arts Academy' },
        
      ],
    
    }
  }
}
</script>
