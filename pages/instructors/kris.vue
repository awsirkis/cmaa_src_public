<template>
  <div>
    
    <main>
      <article>
        <h1>Sempai Kris</h1>
        <carousel :images="['http://via.placeholder.com/350x150', 'http://via.placeholder.com/350x150', 'http://via.placeholder.com/350x150']" />
      </article>
      <section>
        <instructor NAME="Sempai Kris Roxby" :RANK="['2nd Dan','Karate Instructor', 'Associate Kali/Silat Instructor']" SRC="personnel/kroxby/headshot.jpg" :EXP="['15']" :BIO="[]"/>
      </section>
      <section v-if="($store.getters.instructor && $store.getters.name === 'Kris Roxby') || $store.getters.admin || $store.getters.sensei">
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
      title: 'Sempai Kris | CMAA',
      meta: [
        { name: 'description', content: 'Sempai Kris Bio Page' },
        
      ],
    
    }
  }
}
</script>