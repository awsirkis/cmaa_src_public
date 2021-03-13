<template>
  <div>
    
    <main>
      <article>
        <h1>Youth Programs</h1>
        <p>Our Youth program covers the age range of 4-16, and engages youth in fun, safe self-defense practice and excercise.</p>
      </article>
      <div class="container-fluid">
          <div class="row justify-content-center text-center">
              <leftimage TITLE="Karate" :SRC="['osmkkf_logo.png']" DESCRIPTION="Youth Karate focuses on technique, control, and respect for the damage you can cause. Karate also teaches communication with both youth and adults, respect, and Japanese language and tradition." />
              <rightimage TITLE="Kobudo" :SRC="['osmkkf_logo.png']" DESCRIPTION="Youth Kobudo hones technique using lightweight training weapons. Youth Kobudo usually only utilizes only bo, sai, and kama." />
              <leftimage TITLE="Tuite" :SRC="['youth/tuite/3.jpeg', 'youth/tuite/7.jpeg']" DESCRIPTION="Youth Tuite allows children to defend themselves if grabbed by opponents larger than them. Students will practice on both each other and adults, letting them know how to keep their opponent within their pain threshold." />
              <rightimage TITLE="Camps" :SRC="['osmkkf_logo.png']" DESCRIPTION="Camps are recommended for Youth to hone their techniques under the watchful eye of our Directors. Camps occur here at regular intervals, which is the recommended location for Youth." />
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
      title: 'Youth Programs | CMAA',
      meta: [
        { name: 'description', content: 'Youth programs at Cascade Martial Arts Academy' },
        
      ],
    
    }
  }
}
</script>
