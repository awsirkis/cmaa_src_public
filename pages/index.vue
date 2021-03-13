<template>
  <div>
    
    <main>
      <article>
        <h1>Welcome to Cascade Martial Arts Academy!</h1>
        <p>CMAA is a chartered dojo of the Okinawan Shorin-Ryu Matsumura-Seito Karate and Kobudo Federation (OSMKKF) in Everett, Washington. Okinawan karate is a style meant for pure combat, rather than being done for the sole purpose of excercise and self-perfection.</p>
        <p>CMAA is also affiliated with the Parra Academy out of Austin, Texas under Tuhon Ray Parra</p>
        <img alt="image" src="~/assets/img/group_photo.JPG" style="width:100%">
      </article>
      <article>
        <h1>Our Mission</h1>
        <p>We strive to not only cultivate great martial artists but we believe the first line of defense is strong character with integrity, humility and confidence. We achieve this by mutual respect, discipline and dedicated physical training &#38; conditioning.</p>
        <carousel :images="['adults/karate/19.jpeg','adults/kobudo/7.jpeg']" />
      </article>
      <article>
        <h1>What We Do</h1>
        <p>Although we focus on Okinawan Karate, we have a more integrated approach, allowing for techniques to be used in the real world.</p>
        <p>All classes are overseen by Sensei Rick Vogt, certified Karate and Kobudo Instructor, as well as <nuxt-link to="/instructors">other certified instructors.</nuxt-link></p>
        <div class="container-fluid">
          <div class="row justify-content-center text-center">
            <leftimage :SRC="['adults/karate/41.jpeg']" TITLE="Okinawan Karate (沖縄空手)" DESCRIPTION='Basic open-hand techniques, which includes punches, kicks, blocks, and throws. We practice traditonal kata (型), while also drilling our one-steps, or ippon-kumite (一本組手), and controlled sparring. These are all practiced as bunkai, which train to use the moves in a real combat setting.' />
            <rightimage :SRC="['adults/kobudo/7.jpeg']" TITLE="Okinawan Kobudo (沖縄古武道)" DESCRIPTION="Our weapons system contains kata and drills using 9 traditional Okinawan weapons, ranging from tool handles to stirrups to Okinawan police weapons. Weapons emphasize power from the hips and shoulders, as well as accuracy and control."  />
            <leftimage :SRC="['osmkkf_logo.png']" TITLE="Okinawan Tuite-jutsu (沖縄取手術)" DESCRIPTION="Tuite introduces techniques to manipulate your opponent's body by applying knowledge of anatomy, body mechanics, timing, and physics. Focused tuite training begins at Youth Green Belt and Adult Blue Belt, due to necessity of understanding the damage that can be caused."  />
            <rightimage :SRC="['combatives/kali/73.jpeg']" TITLE="Kali" DESCRIPTION='A Filipino martial art that focuses on fighting with sticks, knives, bladed weapons, improvised weapons, and open-hand techniques. Techniques are brought to us by Ray Parra of the Parra Academy at an annual seminar.'  />
            <leftimage :SRC="['combatives/silat/1.gif']" TITLE="Silat" DESCRIPTION='Indonesian martial arts combining strikes, locks, and weaponry. It is often taught in conjunction with Kali due to overlap in techniques.'  />
            <rightimage :SRC="['combatives/muaythai/2.jpeg']" TITLE="Muay Thai" DESCRIPTION='Based on the philosophy of using 8 points on the body as 8 weapons, several Muay Thai techniques have been blended in with our other combatives styles to supplement protecting yourself during combat.'  />
            <leftimage :SRC="['combatives/silat/18.jpeg']" TITLE="JKD" DESCRIPTION='Jeet Kune Do ( Jun Fan Jeet Kune Do) or the way of the intercepting fist. JKD is a hybrid philosophy of Martial Arts heavily influenced by the personal philosophy and experiences of The Great martial artist Bruce Lee.'  />
            <rightimage :SRC="['womens/30.jpeg']" TITLE="Women's Self Defense" DESCRIPTION="We offer women's self defense seminars, tailored specifically towards defending yourself against an opponent likely to be more aggressive and possibly more physically imposing. Techniques include effective striking, choke evasion, hands on escapes and situational awareness."  />
          </div>
        </div>
      </article>
    </main>
    
  </div>
</template>

<script>
import carousel from '~/components/carousel.vue'
import leftimage from '~/components/programleftimage.vue'
import rightimage from '~/components/programrightimage.vue'


export default {
    
  components: {
    carousel,
    leftimage,
    rightimage
  },
  head () {
    return {
      title: 'Home | CMAA',
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        { name: 'description', content: 'Cascade Martial Arts is an Everett-based dojo of the OSMKKF that specializes in Karate, Kali/Silat, JKD, Throwing, and Muay Thai' },
        
      ],
    link: [
      

    ]
    }
  }
}
</script>
