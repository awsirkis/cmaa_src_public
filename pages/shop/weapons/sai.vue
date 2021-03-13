<template>
<div>
    <main>
      <article>
        <h1>Sai</h1>
        <p>The sai is a three-pronged truncheon sometimes thought to be a tool used to create holes in the ground. This is highly unlikely as metal on Okinawa was in short supply at this time and a stick would have served this purpose more satisfactorily for a poor commoner.</p>
        <p>The sai was imported from China and utilized by Royal Law Enforcement (Chikudun Peichin) as a law enforcement weapon. The weapon is metal, with two shorter prongs on either side of the main shaft are used for trapping (and sometimes breaking) other weapons such as a sword or bo.</p>
        </article>
      <carousel :images="[]" />
      <div class="container-fluid">
        <div class="row justify-content-center text-center">
            <itemcard v-for="(item, index) in $store.getters.store.filter(item=>{return item.category === 'sai'})" :key="index" :Name="item.name"/>
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
      title: 'Shop - Sai',
      meta: [
        { name: 'description', content: 'Sai order forms for Cascade Martial Arst Academy' },
        
      ]
    
    }
  }
}
</script>
