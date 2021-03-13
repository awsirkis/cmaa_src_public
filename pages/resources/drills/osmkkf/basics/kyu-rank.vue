<template>
  <div>
    
    <main>
      <mp4page TITLE="Kyu Rank Basics" />
      <article>
        <h1>Ordered List of Basics</h1>
        <ol>
          <li>Front stance, Double-middle Punch (L/R)</li>
          <li>Straddle stance, Double-middle Punch (L/R, horse stance for Youth)</li>
          <li>Straddle stance, Double-high Punch (L/R, horse stance for Youth)</li>
          <li>Straddle Stance, Sweep/Punch/Block (Alternating, horse stance for Youth)</li>
          <li>Walking, Crossbody Block (Walking horse stance for Tanren)</li>
          <li>Walking, Single-bone Block (Walking Deep Stance for Tanren)</li>
          <li>Walking, Knife-hand Block (Walking Catstance for Tanren)</li>
          <li>Walking, double-middle-punch (triple punch on direction change)</li>
          <li>Walking, Downblocks (walking deepstance for Tanren)</li>
          <li>Walking, Double-bone Blocks (walking horse stance for Tanren)</li>
          <li>Walking, Highblocks (walking cat stance for Tanren)</li>
          <li>Punch, Kick under</li>
          <li>Walking, Single Punches</li>
          <li>Front Stance, Front Snap Kicks (L/R)</li>
          <li>Straddle Stance, Alternating Block to the Front, Front Kick to the Side</li>
          <li>Feet Together, Alternating Shin Kicks</li>
          <li>Straddle stance, Alternating Side Snap Kicks</li>
          <li>Straddle Stance, Alternating Side Kicks to the Front</li>
          <li>Forward Stance, Roudnhouse Kicks (L/R)</li>
          <li>Feet Together, Alternating Back Heel Kicks</li>
          <li>Front Stance, Side Snap Kick, Front Snap Kick (L/R)</li>
          <li>Front Stance, Front Snap Kick, Side Snap Kick</li>
          <li>Walking, Downblocks (Forwards slowly, backwards quickly)</li>
          <li>Walking, Reverse Punch</li>
          <li>Walking, Block-Sweep-Jab</li>
        </ol>
      </article>
      <article>
        <h1>Calisthenics</h1>
        <ol>
          <li>Punching the Ground x10</li>
          <li>Kicking the Ground x10</li>
          <li>Jumping Push-ups x10 (All four)</li>
          <li>Standard Push-ups x10</li>
          <li>In-and-Out Sit-ups x10, four-count</li>
          <li>Squats x10, four-count</li>
          <li>Jumping jacks x10, four-count</li>
          <li>High Knees x10, four-count</li>
          <li>Deep Breathing x5</li>
        </ol>
      </article>
    </main>
    
  </div>
</template>

<script>
import mp4page from '~/components/mp4page'
export default {
    
  components: {
    mp4page
  },
  mounted(){
    if(!this.$store.getters.isAuth || (!(this.$store.getters.admin || this.$store.getters.sensei) && this.$store.getters.rankKarate < 0)){
      this.$router.push('/')
    }
  },
  head () {
    return {
      title: 'Kyu Rank Basics | CMAA',
      meta: [
        { name: 'description', content: 'Kyu rank Basics video and description' },
        
      ],
    
    }
  }
}
</script>
