<template>
<div>
    <main>
      <article>
        <h1>Knives</h1>
        <p>Training knives are used for combatives classes, where defense both with and against a knife is drilled.</p>
      </article>
      <div class="container-fluid">
        <div class="row justify-content-center text-center">
            <itemcard v-for="(item, index) in $store.getters.store.filter(item=>{return item.category === 'knife'})" :key="index" :Name="item.name"/>
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
      title: 'Training Knives | CMAA',
      meta: [
        { name: 'description', content: 'Knife order forms from Cascade Martial Arts Academy' },
        
      ]
    
    }
  }
}
</script>
