<template>
  <div>
    
    <main>
    
      <article>
        <h1>Instructors</h1>
        <p>Instructors at CMAA do not solely specialize in Okinawan Martial Arts. Instructors have variable levels of experience in Southeast Asian martial arts (Kali, Silat, Muay Thai, Wing Chun, Arnis), East Asian martial arts (Tae Kwon Do, Wing Chun, Judo), and modern fighting systems (international boxing, krav maga, systema). Instructors are required to show deep understanding of their material as well as their teaching ability and cooperativeness.</p>
      </article>
      <article>
        <h3>Chief Instructor</h3>
        <div class="container-fluid">
          <div class="row justify-content-center text-center">
            <icard NAME="Sensei Rick Vogt" :EXP="'10 years Karate'" LNK="/instructors/sensei" SRC="personnel/rvogt/headshot.jpg"/>
          </div>
        </div>
      </article>
      <article>
        <h3>Assistant Instructors</h3>
        <div class="container-fluid">
          <div class="row justify-content-center text-center">
            <icard NAME="Sempai Max Puls"         SRC="personnel/mpuls/headshot.jpg" LNK="/instructors/max"/>
            <icard NAME="Sempai Adam Sirkis"      :EXP="'15 years Karate'" SRC="personnel/awsirkis/headshot.jpg"  LNK="/instructors/adam"/>
            <icard NAME="Sempai Kris Roxby"       SRC="personnel/kroxby/headshot.jpg"   LNK="/instructors/kris"/>
          </div>
        </div>
      </article>
    </main>
    
  </div>
</template>

<script>
    import icard from '~/components/instructorcard.vue'
export default {
    
  components: {
    icard
  },
  head () {
    return {
      title: 'Instructors | CMAA',
      meta: [
        { name: 'description', content: 'Meet Cascade Martial Arts Instructors' },
        {
          name: 'keywords', content: 'karate, okinawan, Everett, tuite, kali, silat, JKD, muay thai, WA, washington, washington state, snohomish, judo, BJJ,jiujitsu,jiu-jitsu, brazilian,jiu,jitsu, aikido, aikijitsu, iaido, iaijitsu, tae,kwan,do, taekwando, krav,maga, boxing, filipino,boxing, law enforcement, military, martial, arts'
        },
        {
            charset: 'UTF-8'
        },
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0'
        }
      ],
    
    }
  }
}
</script>
