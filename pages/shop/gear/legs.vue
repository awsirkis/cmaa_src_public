<template>
<div>
    <main>
      <article>
        <h1>Leg Guard</h1>
        <p>If you're not sure about the best leg gearto buy, try one of these reccomendations.</p>
      </article>
      <div class="container-fluid">
        <div class="row justify-content-center text-center">
            <itemcard v-for="(item, index) in $store.getters.store.filter(item=>{return item.category === 'legs'})" :key="index" :Name="item.name"/>
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
      title: 'Leg Gear | CMAA',
      meta: [
        { name: 'description', content: 'Adult gi tops order form' },
        
      ]
    
    }
  }
}
</script>