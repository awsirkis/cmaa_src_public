<template>
  <div>
    <main>
      <article>
        <h1>Adult Programs</h1>
        <p>Adults have a few unique opportunities that Youth do not have. While Youth programs are focused on discipline, respect, and culture, Adult programs place more emphasis on self-defense, leadership, and physicality.</p>
      </article>
      <div class="container-fluid">
          <div class="row justify-content-center text-center">
              <leftimage TITLE="Karate" :SRC="['adults/karate/19.jpeg', 'adults/karate/37.jpeg', 'adults/karate/41.jpeg']" DESCRIPTION="The adult karate program is open to anybody 16 years of age or older. Adults have the ability to progress up through 8th dan. Adults may also become Instructors, allowing them to teach at any OSMKKF chartered dojo. If an adult, or any student, has a belt in any other style, then they are allowed to wear this belt during class - however, they will progress through our ranking system like any other." />
              <rightimage TITLE="Kobudo" :SRC="['adults/kobudo/2.jpeg', 'adults/kobudo/7.jpeg']" DESCRIPTION="Adult kobudo also includes nunchaku, tonfa, and eku. Adults can also become instructors in Kobudo, allowing them to teach weapons basics and advanced kata throughout the federation." />
              <leftimage TITLE="Tuite" DESCRIPTION="Traditional Okinawan tuite has 81 techniques, averaging 6 techniques per rank. Tuite is required for rank advancement." />
              <rightimage TITLE="Kumite" DESCRIPTION="Sparring utilizes a combination of traditional and modern methods" />
              <leftimage TITLE="Camps" DESCRIPTION="Camps are open to adults 9th Kyu and above. Camps will occur at regular intervals in either our Everett location, or in another dojo in the OSMKKF. Students are required to attend one camp per year of time in grade to advance to dan ranks. Camps are also a good opportunity to learn advanced techniques and test with our Directors present." />
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
      title: 'Adult Programs | CMAA',
      meta: [
        { name: 'description', content: 'Information on Adult Programs at Cascade Martial Arts Academy' },
        
      ],
    
    }
  }
}
</script>
