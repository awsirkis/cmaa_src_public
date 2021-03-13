<template>
<div>
    <main>
      <article>
        <h1>Gloves</h1>
        <p>If you're not sure about the best gloves to buy, try one of these reccomendations.</p>
      </article>
      <div class="container-fluid">
        <div class="row justify-content-center text-center">
            <itemcard v-for="(item, index) in $store.getters.store.filter(item=>{return item.category === 'gloves'})" :key="index" :Name="item.name"/>
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
        carousel
    },
  head () {
    return {
      title: 'Gloves | CMAA',
      meta: [
        { name: 'description', content: 'Adult gi tops order form' },
        
      ]
    
    }
  }
}
</script>