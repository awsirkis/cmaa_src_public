<template>
<div>
    <main>
      <article>
        <h1>Uniforms</h1>
        <p>For karate practice, we wear the traditional <i>gi</i> and <i>obi</i> worn as standard clothing during the arts origins. These uniforms are made out of cotton instead of hemp or linen, but are smoother and lighter. A uniform is not required starting out, but it is required that you have one and can maintain and wear it by your first test.</p>
      </article>
      <carousel :images="['uniform/Basic_sizing.png', 'uniform/KI_Gi_Sizing_chart_1.jpg', 'uniform/Gi_sizing_chart_2.jpg']" />
      <div class="container-fluid">
        <div class="row justify-content-center text-center">
            <itemcard v-for="(item, index) in $store.getters.store.filter(item=>{return item.category === 'gi'})" :key="index" :Name="item.name"/>
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
      title: 'Uniforms | CMAA',
      meta: [
        { name: 'description', content: 'Gi order forms' },
        
      ]
    
    }
  }
}
</script>
