<template>
<div>
    <main>
      <article>
        <h1>Bo</h1>
        <p>A bō, also known as kun or kon, is a piece of wood of varying lengths staff weapon used in Okinawa. The bō is usually made with hard wood or a flexible wood, such as red or white oak, pine, hickory, or maple. The bō may be tapered in that it can be thicker in the center than at the ends, and is usually circular.</p>
        <p>Bō staff were traditionally used to carry handled items, such as buckets or baskets, through two hooks on the ends that would carry items when laid across the shoulders. Other variations, such as the <i>jo</i> or <i>hanbo</i>, may have been derived from a walking stick instead, especially by monks.</p> 
      </article>
      <carousel :images="[]" />
    <div class="container-fluid">
        <div class="row justify-content-center text-center">
            <itemcard v-for="(item, index) in $store.getters.store.filter(item=>{return item.category === 'staff'})" :key="index" :Name="item.name"/>
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
      title: 'Bo | CMAA',
      meta: [
        { name: 'description', content: 'Bo Staff order forms' },
        
      ]
    
    }
  }
}
</script>