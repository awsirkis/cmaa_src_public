<template>
<div>
    <main>
      <div class="container-fluid">
        <div class="row justify-content-center text-center">
            <itemcard v-for="(item, index) in $store.getters.store.filter(item=>{return item.category === 'manual'})" :key="index" :Name="item.name"/>
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
      title: 'Manual | CMAA',
      meta: [
        { name: 'description', content: 'OSMKKF Manual order forms for cascade martial Arts Academy' },
        
      ],
    
    }
  }
}
</script>
