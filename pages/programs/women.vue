<template>
  <div>
    
    <main>
      <article>
        <h1>Women's Self Defense</h1>
        <p>Women's Self-Defense is a course tailored specifically for situations women are more likely to find themselves in, such as fighting against a bigger attacker, being ambushed, and other. Techniques in this course are also meant to be doable with a minimal amount of special training. Women's Self Defense seminars are open to the non-members for $25.00. Self Defense seminars may also be requested by organizations to teach their employees. Group discounts are available.</p>
      </article>
      <div class="container-fluid">
          <div class="row justify-content-center text-center">
            <leftimage TITLE="Combatives" :SRC="['womens/30.jpeg']" DESCRIPTION="Combatives are tailored to deal the most damage to your opponent at the lowest risk of injuring yourself. Training includes using high-toruqe strikes as well as targeting more nerve-dense targets." />
            <rightimage TITLE="Situation Avoidance" DESCRIPTION="In our normal program, the best block has been declared to be 'to not be there.' The same premise can be applied from a single attack all the way to a full encounter. We make sure that you know how to avoid becoming a target, as well as your right to defend yourself in Washington State." />
            <leftimage TITLE="Tuite" :SRC="['womens/30.jpeg']" DESCRIPTION="Tuite is the epitomy of defending yourself against a more powerful opponent. Traditional Okinawan Tuite has 81 techniques for various situation. We have curated around 10 of the easiest to learn and execute to teach to the public. Learn how to break free of and reverse your opponent's grabs, allowing you to escape." />
            <rightimage TITLE="Law" DESCRIPTION="We've all heard the phrase, 'Better judged by twelve than carried by six.' However, it's best to not even make it to the stand, so we will walk through Washington State stand-your-ground laws, so you have the knowledge to know how much force to apply in defending yourself." />
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
      title: "Women's Defense | CMAA",
      meta: [
        { name: 'description', content: 'Womens Self-defense programs at Cascade Martial Arts Academy' },
        
      ],
    
    }
  }
}
</script>
