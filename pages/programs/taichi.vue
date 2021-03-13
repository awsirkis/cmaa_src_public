<template>
  <div>
    
    <main>
      <article>
        <h1>Tai Chi</h1>
        <p>Tai Chi is an internal Chinese martial art practiced for both its defense training, its health benefits and meditation. Classes are taught by Sifu Larry Flemming. It is taught three days a week, with the only cost being an accepted donation. Call 240-602-8651 for more information.</p>
      </article>
      <article>
        <h1>Available Forms</h1>
        <div class="container-fluid">
          <div class="row justify-content-center text-center">
              <leftimage TITLE="24 Style" :SRC="['osmkkf_logo.png']" DESCRIPTION="24 Style is the basic tai chi form, which is often referred to as the 'Simplified' form. While tai chi is normally an oral tradition subject to change, 24 style is standardized. It is taught Wednesday at 10 am and Saturday at 12 pm." />
              <rightimage TITLE="Wudang" :SRC="['osmkkf_logo.png']" DESCRIPTION="This focuses on practical applications of tai chi for self-defense. It is taught Thursdays at 4:45 pm." />
              <leftimage TITLE="37 Style" :SRC="['osmkkf_logo.png']" DESCRIPTION="Taught Saturdays at 1:30 pm." />
            </div>
        </div>
      </article>
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
      title: 'Tai Chi | CMAA',
      meta: [
        { name: 'description', content: 'tai Chi Quan at Cascade martial Arts Academy' },
        
      ],
    
    }
  }
}
</script>
