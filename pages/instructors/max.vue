<template>
  <div>
    
    <main>
      <article>
        <h1>Sempai Max</h1>
      </article>
      <section>
        <instructor NAME="Sempai Max Puls" :RANK="['3rd Dan','Karate Instructor']" :EXP="['15']" SRC="personnel/mpuls/headshot.jpg" :BIO="['Max Puls is a Sandan in Shorin-ryu Matsumura Seito Karate.  Martial arts instruction for Max  didn`t begin until he was 36 years old, having previously met a dozen Black Belts and witnessed their strikes and kicks in person. It was the determination, spirit and fighting style of Sensei Tim Amey of Evergreen Karate and Kobudo that brought Max into the family of instructors and students in the OSMKKF karate federation.  Max received his Shodan under Sensei Jay Gravelle and has studied open-hand, kobudo and tuide techniques with Sempai Rick Vogt, Sensei Tim Amey, Hanshi John Shipes and Hanshi Fusei Kise for 13 years. Max is passionate about teaching men and women of all ages how to defend themselves against a large, determined attacker using powerful and proven self-defense techniques.  Outside the dojo, Max stays busy as a White Hat penetration tester for Moss Adams, hikes in the Cascades and Rockies and works with his wife Tina in their backyard garden.']"/>
      </section>
      <section v-if="($store.getters.instructor && $store.getters.name === 'Max Puls') || $store.getters.admin || $store.getters.sensei">
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
      title: 'Sempai Max | CMAA',
      meta: [
        { name: 'description', content: 'Sempai Maxs Bio Page' },
        
      ],
    
    }
  }
}
</script>