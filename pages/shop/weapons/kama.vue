<template>
<div>
    <main>
      <article>
        <h1>Kama</h1>
        <p>Kama were traditional farming sickle. The original design had a nook between the blade and the end of the shaft, which is still present in our wooden training kama - however, this was a structural flaw, an dwas removed </p>
      </article>
      <carousel :images="[]" />
      <div class="container-fluid">
        <div class="row justify-content-center text-center">
            <itemcard v-for="(item, index) in $store.getters.store.filter(item=>{return item.category === 'kama'})" :key="index" :Name="item.name"/>
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
      title: 'Kama | CMAA',
      meta: [
        { name: 'description', content: 'Kama order forms from Cascade Martial Arts Academy' },
        
      ]
    
    }
  }
}
</script>
