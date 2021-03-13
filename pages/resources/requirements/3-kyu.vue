<template>
    <div>
        
        <main>
            <article>
                <h1>Testing</h1>
                <p>Testing Fees cover your official certificates from Okinawa. Time in grade refers to all three disciplines. Promotion to Black Belt requires attending 1 two-day camp per year in grade.</p>
            </article>
            <article>
                <h1>Fees and Requirements</h1>
                <testingitem INDEX="6" RANK="4th Kyu to 3rd Kyu (Brown Belt)" :REQ="['Naihanchi Shodan', 'Pinan Sandan', 'Green Belt Ippon Kumite','Sai Nidan','4th Kyu Tuite #1-5']" PRICE_ADULT='30.00' PRICE_YOUTH="25.00" TIME="4 Months" />
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
                title: '3rd Kyu Testing | CMAA',
                meta: [
        { name: 'description', content: '3rd Kyu Requirements of the OSMKKF' },
        
      ],
                
            }
        }
    }
</script>