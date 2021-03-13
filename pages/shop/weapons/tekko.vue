<template>
<div>
    <main>
      <article>
        <h1>Tekko</h1>
        <p>Tekko are derived traditionally from a horseshoe, while modern variations are derived from the stirrup. Being a knucleduster, moves takes aadvantage of open-hand techniques, while also utilizing slashing techniques that either cut with the knuckles or hammerfist with the ends.</p>
        <p>The tekko we sell are of the latter form.</p>
      </article>
      <div class="container-fluid">
        <div class="row justify-content-center text-center">
            <itemcard v-for="(item, index) in $store.getters.store.filter(item=>{return item.category === 'tekko'})" :key="index" :Name="item.name"/>
        </div>
    </div>
    </main>
</div>
</template>

<script>
import itemcard from '~/components/itemcard.vue'
import carousel from '~/components/carousel.vue'
export default{
    components:{
        carousel,
        itemcard
    },
  head () {
    return {
      title: 'Tekko | CMAA',
      meta: [
        { name: 'description', content: 'Tekko order forms from Cascade Martial Arts Academy' },
        
      ]
    
    }
  }
}
</script>