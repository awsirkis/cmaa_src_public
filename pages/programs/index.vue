<template>
  <div>
    
      <main>
        <article>
            <h1>Programs</h1>
            <p>We offer a variety of programs for all ages and backgrounds.</p>
        </article>
        <div class="container-fluid">
          <div class="row justify-content-center text-center">
              <linkbutton :SRC="['youth/tuite/3.jpeg', 'youth/tuite/7.jpeg']" NAME="Youth" LNK="/programs/youth" DESCRIPTION="Fitness. Discipline. Focus. Fun." />
              <linkbutton :SRC="['adults/karate/19.jpeg', 'adults/karate/37.jpeg', 'adults/karate/41.jpeg','adults/kobudo/2.jpeg', 'adults/kobudo/7.jpeg']" NAME="Adults" LNK="/programs/adult" DESCRIPTION="Fitness. Defense. Technique. Accomplishment." />
              <linkbutton :SRC="['combatives/kali/1.jpeg','combatives/muaythai/1.jpeg', 'combatives/muaythai/2.jpeg', 'combatives/muaythai/3.jpeg', 'combatives/muaythai/4.jpeg','combatives/silat/01.jpeg', 'combatives/silat/16.jpeg', 'combatives/silat/17.jpeg', 'combatives/silat/18.jpeg', 'combatives/silat/22.jpeg', 'combatives/silat/23.jpeg', 'combatives/silat/24.jpeg','combatives/kali/9.jpeg','combatives/kali/12.jpeg','combatives/kali/32.jpeg','combatives/kali/47.jpeg','combatives/kali/49.jpeg','combatives/kali/51.jpeg','combatives/kali/63.jpeg','combatives/kali/66.jpeg','combatives/kali/68.jpeg','combatives/kali/70.jpeg','combatives/kali/72.jpeg','combatives/kali/73.jpeg','combatives/kali/75.jpeg','combatives/kali/76.jpeg','combatives/kali/77.jpeg','combatives/kali/78.jpeg','combatives/kali/84.jpeg','combatives/kali/85.jpeg','combatives/kali/91.jpeg']" NAME="Combatives" LNK="/programs/combatives" DESCRIPTION="Fitness. Defense. Diversity." />
              <linkbutton :SRC="['osmkkf_logo.png']" NAME="Tai Chi" LNK="/programs/taichi" DESCRIPTION="Health. Spirit. Defense." />
              <linkbutton :SRC="['womens/12.jpeg','womens/30.jpeg']" NAME="Women's Self Defense" LNK="/programs/women" DESCRIPTION="Awareness. Defense. Follow-through." />
          </div>
        </div>
      </main>
    
  </div>
</template>

<script>
import linkbutton from '~/components/linkbutton_2.vue'
import rightimage from '~/components/programrightimage.vue'
export default {
    
  components: {
    linkbutton
  },
  head () {
    return {
      title: 'Programs | CMAA',
      meta: [
        { name: 'description', content: 'List of all programs at Cascade Martial Arts Academy' },
        
      ],
    
    }
  }
}
</script>
