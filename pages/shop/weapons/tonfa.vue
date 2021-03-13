<template>
<div>
    <main>
      <article>
        <h1>Tonfa</h1>
        <p>Tonfa came from Chinese law enforcement weapons, however were rediscovered in millstone handles after conquering of Okinawa. Techniques involve gripping it by the side handle or the main shaft.</p>
        <p>Tonfa are more readily recognizable by the modern police baton, however there are a few crucial differences. First, police batons are generally used individually, while tonfa are used in pairs. Second, police batons tend to be rounder, while the main shaft of tonfa are more blocky.</p>
      </article>
      <carousel :images="[]" />
      <div class="container-fluid">
        <div class="row justify-content-center text-center">
            <itemcard v-for="(item, index) in $store.getters.store.filter(item=>{return item.category === 'tonfa'})" :key="index" :Name="item.name"/>
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
      title: 'Tonfa | CMAA',
      meta: [
        { name: 'description', content: 'Tonfa order forms for cascade martial Arts Academy' },
        
      ]
    }
  }
}
</script>
