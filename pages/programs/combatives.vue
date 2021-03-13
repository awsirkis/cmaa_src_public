<template>
  <div>
    
    <main>
      <article>
        <h1>Combatives Programs</h1>
        <p>Students at CMAA have the opportunity to take combatives classes on Wednesdays and Saturdays. While these classes do not help with progression through normal ranks, these classes are encouraged for more diverse applications of fighting techniques, as well as showing techniques not seen in traditional karate.</p>
      </article>
      <div class="container-fluid">
          <div class="row justify-content-center text-center">
            <leftimage TITLE="Kali" :SRC="['combatives/kali/9.jpeg','combatives/kali/12.jpeg','combatives/kali/32.jpeg','combatives/kali/47.jpeg','combatives/kali/49.jpeg','combatives/kali/51.jpeg','combatives/kali/63.jpeg','combatives/kali/66.jpeg','combatives/kali/68.jpeg','combatives/kali/70.jpeg','combatives/kali/72.jpeg','combatives/kali/73.jpeg','combatives/kali/75.jpeg','combatives/kali/76.jpeg','combatives/kali/77.jpeg','combatives/kali/78.jpeg','combatives/kali/84.jpeg','combatives/kali/85.jpeg','combatives/kali/91.jpeg']" DESCRIPTION="A Filipino martial art that focuses on fighting with sticks, knives, bladed weapons, improvised weapons, and open-hand techniques. Training focuses on disarming or otherwise disbaling opponents. Techniques are brought to us by Ray Parra of the Parra Academy at an annual seminar." />
            <rightimage TITLE="Silat" :SRC="['combatives/silat/01.jpeg', 'combatives/silat/16.jpeg', 'combatives/silat/17.jpeg', 'combatives/silat/18.jpeg', 'combatives/silat/22.jpeg', 'combatives/silat/23.jpeg', 'combatives/silat/24.jpeg']" DESCRIPTION="Indonesian martial arts combining strikes, locks, and weaponry. It is often taught in conjunction with Kali due to overlap in techniques. Less emphasis is placed on striking, and more emphasis is placed on evasions, manipulations, and disarms, with the end goal being Tuite with a weapon. Techniques are brought to us by Ray Parra of the Parra Academy at an annual seminar." />
            <leftimage TITLE="Muay Thai" :SRC="['combatives/muaythai/1.jpeg', 'combatives/muaythai/2.jpeg', 'combatives/muaythai/3.jpeg', 'combatives/muaythai/4.jpeg', /*'combatives/muaythai/5.jpeg', 'combatives/muaythai/6.jpeg', 'combatives/muaythai/7.jpeg', 'combatives/muaythai/gif1.gif', 'combatives/muaythai/gif2.gif'*/]" DESCRIPTION="Based on the philosophy of using 8 points on the body as 8 weapons, several Muay Thai techniques have been blended in with our other combatives styles to supplement protecting yourself during combat." />
            <rightimage TITLE="JKD" :SRC="['combatives/silat/01.jpeg', 'combatives/silat/16.jpeg', 'combatives/silat/17.jpeg', 'combatives/silat/18.jpeg', 'combatives/silat/22.jpeg', 'combatives/silat/23.jpeg', 'combatives/silat/24.jpeg']" DESCRIPTION="A scientifcally designed modern martial art that practices fighting at multiple different ranges. While we don't formally train JKD due to the dangers inherent, some techniques have been brought in to our combatives system." />
            <!--<leftimage TITLE="Sambo" :SRC="['osmkkf_logo.jpeg']" DESCRIPTION="Takedowns and groundfighting supplement the more upright fighting styles, teaching how to deal with an opponent who will either take you down or knock you down." />-->
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
      title: 'Combatives | CMAA',
      meta: [
        { name: 'description', content: 'Cobatives Programs at Cascade Martial Arts Academy' },
        
      ],
    
    }
  }
}
</script>
