<template>
  <div>
    
    <main>
      <article>
          <h1>Shop Uniforms</h1>
          <p>Place uniform orders. Orders will be processed by CMAA staff, and payment will occur upon receiving of your weapons.</p>
      </article>
      <article>
          <h1>Available Uniforms</h1>
          <div class="container-fluid">
            <div class="row justify-content-center text-center">
              <linkbutton LNK="/shop/uniforms/gi"  NAME="Gi Uniforms" DESCRIPTION=""  v-if="$store.getters.store.filter(item=>{return item.category === 'gi'}).length > 0"/>
              <linkbutton LNK="/shop/uniforms/clothing"  NAME="Tshirts and Hoodies" DESCRIPTION="" SRC="shopping/Shirt_Front.jpg"  v-if="$store.getters.store.filter(item=>{return item.category === 'clothing'}).length > 0"/>
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
      title: 'Uniforms | CMAA',
      meta: [
        { name: 'description', content: 'Uniforms order forms' },
        
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