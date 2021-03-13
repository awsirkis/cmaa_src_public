<template>
  <div> 
    <main>
            <article>
                <h1>Shop</h1>
                <p>This shop is a convenient way for CMAA students to order new equipment. Payments will be processed by Snesei Rick Vogt.</p>
            </article>
            <article>
              <h1>Available Products</h1>
              <div class="container-fluid">
                <div class="row justify-content-center text-center">
                    <linkbutton  NAME="Weapons" LNK="/shop/weapons/" DESCRIPTION="Buy new weapons"  v-if="$store.getters.store.filter(item=>{return item.category === 'staff' || item.category === 'eku' || item.category === 'kama' || item.category === 'knife' || item.category === 'nunchaku' || item.category === 'sai' || item.category === 'tambo' || item.category === 'tekko' || item.category === 'tinbe' || item.category === 'rochin' || item.category === 'tonfa'}).length > 0"/>
                    <linkbutton  NAME="Uniforms" LNK="/shop/uniforms/" DESCRIPTION="Buy uniform tops and bottoms"  v-if="$store.getters.store.filter(item=>{return item.category === 'gi' || item.category === 'clothing'}).length > 0"/>
                    <linkbutton  NAME="Gear" LNK="/shop/gear/" DESCRIPTION="Buy sparring Gear"  v-if="$store.getters.store.filter(item=>{return item.category === 'gloves' || item.category === 'legs' || item.category === 'headgear' || item.category === 'mouthguard'}).length > 0"/>
                    <linkbutton  NAME="Manual" LNK="/shop/manual" DESCRIPTION="Manual" v-if="$store.getters.isAuth && $store.getters.store.filter(item=>{return item.category === 'manual'}).length > 0"/>
                    <linkbutton  NAME="Camps and Seminars" LNK="/shop/camps/" DESCRIPTION="Camps and Seminars" v-if="$store.getters.store.filter(item=>{return item.category === 'event'}).length > 0"/>
                </div>
              </div>
            </article>
        </main>  
  </div>
</template>

<script>
import linkbutton from '~/components/linkbutton.vue'

export default {
    
  components: {
    linkbutton
  },
  head () {
    return {
      title: 'Shop | CMAA',
      meta: [
        { name: 'description', content: 'Shopping for CMAA Equipment' },
        
      ],
    
    }
  }
}
</script>
