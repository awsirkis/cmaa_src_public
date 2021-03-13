<template>
  <div>
    
    <main>
      <article>
        <h1>Sensei Rick</h1>
      </article>
      <section>
        <instructor NAME="Sensei Rick Vogt" :RANK="['3rd Dan', 'Karate Instructor', 'Kobudo Instructor', 'Apprentice Kali/Silat Instructor']" :EXP="['15']" SRC="personnel/rvogt/headshot.jpg" :BIO="['Sensei Vogt is from the Washington State and has lived in the Puget Sound area most of his life. Rick started training formally in Martial Arts in 2011 at EKKC under Sensei Amey and has received his Instructors Certificate in Karate and Kobudo in the Federation. Additionally, Mr. Vogt was drafted to play professional baseball for the Seattle Mariners organization in 1984. In addition to his formal martial arts training and instructing, Rick has worked with multiple organizations within the public and private security arena. Mr. Vogt also has over 15 years in coaching kids and adults in various sports such as Baseball, Softball, Soccer along with being a certified Ski and Snowboard instructor.','Rick is very active in the federation continually broadening his martial arts education by continually training with classes and attending seminars, as well as being the lead instructor for the youth classes. Sensei currently holds the rank of 3rd Degree Black Belt (Sandan) in karate (open hand), Nidan Kobudo (traditional Okinawan weaponry), and Shodan in tuite (the art of joint manipulation) as well as being ranked in Jeet Kun Do. Sensei is also a certified instructor in Karate and Kobudo within the Organization.']"/>
      </section>
      <section v-if="($store.getters.instructor && $store.getters.name === 'Rick Vogt') || $store.getters.admin || $store.getters.sensei">
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
      title: 'Sensei Rick | CMAA',
      meta: [
        { name: 'description', content: 'Sensei Ricks Bio Page' },
        
      ],
    
    }
  }
}
</script>