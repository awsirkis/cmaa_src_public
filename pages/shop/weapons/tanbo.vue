<template>
<div>
    <main>
      <article>
        <h1>Tambo</h1>
        <p>Tambo are short sticks derived from splitting a hanbo in half. They are wielded in pairs or individually, and are used for striking and locking.</p>
      </article>
      <carousel :images="[]" />
      <div class="container-fluid">
        <div class="row justify-content-center text-center">
            <itemcard v-for="(item, index) in $store.getters.store.filter(item=>{return item.category === 'tambo'})" :key="index" :Name="item.name"/>
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
      title: 'Tanbo | CMAA',
      meta: [
        { name: 'description', content: 'Sai order forms for Cascade Martial Arst Academy' },
        
      ]
    
    }
  }
}
</script>
