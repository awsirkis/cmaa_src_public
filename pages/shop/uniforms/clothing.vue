<template>
<div>
    <main>
      <article>
        <h1>Clothing</h1>
        <p>For combatives practice, we wear normal athletic wear that is easy to move around in. T-shirts are made out of a high-quality cotton for longevity fo both the fabric and the wonderful logo design made by our own Kris Roxby.</p>
      </article>
      <carousel :images="['shopping/Shirt_Back.jpg','shopping/Shirt_Front.jpg']"/>
      <div class="container-fluid">
        <div class="row justify-content-center text-center">
            <itemcard v-for="(item, index) in $store.getters.store.filter(item=>{return item.category === 'clothing'})" :key="index" :Name="item.name"/>
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
      title: 'Clothing | CMAA',
      meta: [
        { name: 'description', content: 'Tshirt and Hoodie order forms' },
        
      ]
    
    }
  }
}
</script>
