<template>
<div>
    <main>
      <article>
        <h1>Tinbe and Rochin</h1>
        <p>Tinbe are a small shield, similar to a buckler, that are often paired with smallarms implements such as short spears (rochin) or small swords. Tinbe were traditionally made out of turtle shells, as the Okinawan fishing economy produced no shortage of them. Modern tinbe are made from colored and molded acrylic to look like a turtle shell, or are done in a more traditional circular shape.</p>
      </article>
      <div class="container-fluid">
        <div class="row justify-content-center text-center">
            <itemcard v-for="(item, index) in $store.getters.store.filter(item=>{return item.category === 'tinbe'})" :key="index" :Name="item.name"/>
            <itemcard v-for="(item, index) in $store.getters.store.filter(item=>{return item.category === 'rochin'})" :key="index" :Name="item.name"/>
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
      title: 'Tinbe/Rochin | CMAA',
      meta: [
        { name: 'description', content: 'Tinbe and Rochin order forms for Cascade Martial Arts Academy' },
        
      ]
    
    }
  }
}
</script>
