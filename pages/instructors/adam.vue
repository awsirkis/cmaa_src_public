<template>
  <div>
    
    <main>
      <article>
        <h1>Sempai Adam</h1>
      </article>
      <section>
        <instructor NAME="Sempai Adam Sirkis" :RANK="['2nd Dan', 'Karate Instructor', 'Phase I Level I Kali/Silat']" :EXP="['15 years Okinawan karate, 2 years Kali/Silat']" SRC="personnel/awsirkis/headshot.jpg" :BIO="['Adam is a software engineering student and martial artist who has lived in the Everett area his whole life. He is an Eagle Scout and has served in many groups, including robotics teams, running teams, and musical groups.','He has been studying Okinawan Karate for 16 years. He currently holds a 2nd Dan in the OSMKKF, as well as Karate Instructor Certification. He also studies other martial arts, such as Judo, Iaido, Kenjutsu, and Aikijitsu informally.']"/>
      </section>
      <section v-if="($store.getters.instructor && $store.getters.name === 'Adam Sirkis') || $store.getters.admin || $store.getters.sensei">
        <h3>This is where editing will be</h3>
      </section>
    </main>
    
  </div>
</template>


<script>
import instructor from '~/components/instructor.vue'
export default {
    
  components: {
    instructor
  },
  head () {
    return {
      title: 'Sempai Adam | CMAA',
      meta: [
        { name: 'description', content: 'Sempai Adams Bio Page' },
        
      ],
    
    }
  }
}
</script>