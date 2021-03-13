<template>
    <div>
        
        <main>
            <article>
                <h1>Upcoming Camps</h1>
                <p>Camps are three-to-five full-day classes, generally led by a Hanshi or Kyoshi, where we go in-depth into new corrections to the curriculum. This is also a chance for higher-level tests, as well as Instructor Certifications. Check here  or on the <nuxt-link to="/calendar">calendar</nuxt-link> for Upcoming Camps. Camps are listed for both CMAA and for the Federation.</p>
            </article>
            <article>
                <p>There are no scheduled camps for the time being. Check back later.</p>
                <div class="container-fluid" >
                    <div class="row justify-content-center text-center">
                        <itemcard v-for="(item, index) in $store.getters.store.filter(item=>{return item.category === 'event'})" :key="index" :Name="item.name"/>
                    </div>
                </div>
            </article>
        </main>
        
    </div>
</template>

<script>
    import itemcard from '~/components/itemcard.vue'
    import event from '~/components/event.vue'
    export default {
    
        components: {
            event,
            itemcard
        },
        head() {
            return {
                title: 'Camps | CMAA',
                meta: [
        { name: 'description', content: 'Camps and Seminars at Cascade Martial Arts Academy' },
        
      ],

            }
        }
    }
</script>