<template>
<div>
    <main>
      <article>
        <h1>Eku</h1>
        <p>Eku are the Okinawan variant on the Japanese oar. The term <i>eku</i> refers to the local wood used for manufacture.</p>
        <p>Key features include a point at the tip, one curved face and one ridged face, and being much longer than it is wide.</p>
        <p>One of the signature moves utilizes the fact that a fisherman would be fighting on a beach, and thus uses the blade to kick sand into an opponents eyes. Other moves utilize the shorter length but sharper edge to increase penetration power, making it the Okinawan equivalent of the <i>naginata</i>.</p>
      </article>
      <div class="container-fluid">
        <div class="row justify-content-center text-center">
            <itemcard v-for="(item, index) in $store.getters.store.filter(item=>{return item.category === 'eku'})" :key="index" :Name="item.name"/>
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
      title: 'Eku | CMAA',
      meta: [
        { name: 'description', content: 'Eku Order Forms' },
        
      ]
    
    }
  }
}
</script>
