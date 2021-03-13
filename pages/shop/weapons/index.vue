<template>
  <div>
    
    <main>
      <article>
          <h1>Shop Weapons</h1>
          <p>Place weapon orders. Orders will be processed by CMAA staff, and payment will occur upon receiving of your weapons.</p>
      </article>
      <article>
          <h1>Available Weapons</h1>
          <div class="container-fluid">
            <div class="row justify-content-center text-center">
              <linkbutton LNK="/shop/weapons/bo" SRC="weapons/bo.png" NAME="Bo" v-if="$store.getters.store.filter(item=>{return item.category === 'staff'}).length > 0"/>
              <linkbutton LNK="/shop/weapons/sai" SRC="weapons/sai.png" NAME="Sai"  v-if="$store.getters.store.filter(item=>{return item.category === 'sai'}).length > 0"/>
              <linkbutton LNK="/shop/weapons/kama" SRC="weapons/kama.png" NAME="Kama"   v-if="$store.getters.store.filter(item=>{return item.category === 'kama'}).length > 0"/>
              <linkbutton LNK="/shop/weapons/tonfa" SRC="weapons/tonfa.png" NAME="Tonfa"  v-if="$store.getters.store.filter(item=>{return item.category === 'tonfa'}).length > 0"/>
              <linkbutton LNK="/shop/weapons/tanbo" SRC="weapons/tanbo.png" NAME="Tanbo"   v-if="$store.getters.store.filter(item=>{return item.category === 'tambo'}).length > 0"/>
              <linkbutton LNK="/shop/weapons/knives" SRC="weapons/tanto.png" NAME="Knives"  v-if="$store.getters.store.filter(item=>{return item.category === 'knife'}).length > 0" />
              <linkbutton LNK="/shop/weapons/nunchaku" SRC="weapons/nunchaku.png" NAME="Nunchaku"  v-if="$store.getters.store.filter(item=>{return item.category === 'nunchaku'}).length > 0" />
              <linkbutton LNK="/shop/weapons/nunchaku" SRC="weapons/nunchaku.png" NAME="Eku"  v-if="$store.getters.store.filter(item=>{return item.category === 'eku'}).length > 0" />
              <linkbutton LNK="/shop/weapons/nunchaku" SRC="weapons/nunchaku.png" NAME="Tekko"  v-if="$store.getters.store.filter(item=>{return item.category === 'tekko'}).length > 0" />
              <linkbutton LNK="/shop/weapons/nunchaku" SRC="weapons/nunchaku.png" NAME="Tinbe/Rochin"  v-if="$store.getters.store.filter(item=>{return item.category === 'tinbe' || item.category === 'rochin'}).length > 0" />
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
      title: 'Weapons | CMAA',
      meta: [
        { name: 'description', content: 'Weapons order forms for Cascade Martial Arts Academy' },
        
      ],
    
    }
  }
}
</script>

<style>
</style>