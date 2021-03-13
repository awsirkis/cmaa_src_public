<template>
    <div>
        
        <main>
            <article>
                <h1>Testing</h1>
                <p>Testing Fees cover your official certificates from Okinawa. Time in grade refers to all three disciplines. Promotion to Black Belt requires attending 1 two-day camp per year in grade.</p>
            </article>
            <article>
                <h1>Fees and Requirements</h1>
                <testingitem :REQ="['Naihanchi Sandan', 'Brown Belt Ippon Kumite','Bo Sandan','2nd Kyu Tuite #1-5']" PRICE_ADULT='45.00' PRICE_YOUTH="40.00" TIME="4 Months" />
             </article>
        </main>
        
    </div>
</template>

<script>
        import testingitem from '~/components/testingitem.vue'    
export default {
        components: {
            testingitem
        },
  mounted(){
    if(!this.$store.getters.isAuth){
      this.$router.push('/')
    }
  },
        head() {
            return {
                title: '1st Kyu Testing | CMAA',
                meta: [
        { name: 'description', content: '1st kyu Requirements of the OSMKKF' },
        
      ],
                
            }
        }
    }
</script>