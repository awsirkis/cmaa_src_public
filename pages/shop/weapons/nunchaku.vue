<template>
<div>
    <main>
      <article>
        <h1>Nunchaku</h1>
        <p>Like most weapons, the nunchaku were originally imported from China. When the Okinawan government was taken over, kobudo masters found a similar weapon in both the horse bridle and the grain thresher.</p>
        <p>Our nunchaku follow the Okinawan Thresher style, meaning they are octagonal. Several other versions exist, however they are not used in shorin-ryu kobudo.</p>
      </article>
      <carousel :images="[]" />
      <div class="container-fluid">
        <div class="row justify-content-center text-center">
            <itemcard v-for="(item, index) in $store.getters.store.filter(item=>{return item.category === 'nunchaku'})" :key="index" :Name="item.name"/>
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
        itemcard,
        carousel
    },
  head () {
    return {
      title: 'Nunchaku | CMAA',
      meta: [
        { name: 'description', content: 'Nunchaku order forms from Cascade Martial Arts' },
        
      ]
    
    }
  }
}
</script>
