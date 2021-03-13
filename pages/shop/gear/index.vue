<template>
  <div>
    
    <main>
      <article>
          <h1>Shop Gear</h1>
          <p>Place sparring gear orders. Orders will be processed by CMAA staff, and payment will occur upon receiving of your weapons.</p>
      </article>
      <article>
          <h1>Available Gear</h1>
          <div class="container-fluid">
            <div class="row justify-content-center text-center">
              <linkbutton LNK="/shop/gear/mouthguard"  NAME="Mouthguards" DESCRIPTION="" v-if="$store.getters.store.filter(item=>{return item.category === 'mouthguard'}).length > 0"/>
              <linkbutton LNK="/shop/gear/legs"  NAME="Leg Protection" DESCRIPTION="" v-if="$store.getters.store.filter(item=>{return item.category === 'legs'}).length > 0"/>
              <linkbutton LNK="/shop/gear/gloves"  NAME="Gloves" DESCRIPTION="" v-if="$store.getters.store.filter(item=>{return item.category === 'gloves'}).length > 0"/>
              <linkbutton LNK="/shop/gear/head"  NAME="Headgear" DESCRIPTION="" v-if="$store.getters.store.filter(item=>{return item.category === 'headgear'}).length > 0"/>
            </div>
          </div>
      </article>
    </main>
    
  </div>
</template>

<script>import linkbutton from '~/components/linkbutton.vue'
export default {
    
  components: {
    linkbutton
  },
  head () {
    return {
      title: 'Gear | CMAA',
      meta: [
        { name: 'description', content: 'Gear order forms' },
        
      ],
    
    }
  }
}
</script>

<style>
@media screen and (min-width: 600px){
  #shopping_grid{
    display: grid;
    grid-template-columns: 30% 30% 30%;
    column-gap: 3%;
    row-gap: 3%;
  }
}
@media screen and (max-width: 600px){
  #shopping_grid{
    display: grid;
    grid-template-columns: 100%;
    column-gap: 3%;
    row-gap: 3%;
  }
}
</style>