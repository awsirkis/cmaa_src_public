<template>
    <div>
        
        <main>
            <article>
                <h1>Testing</h1>
                <p>Testing Fees cover your official certificates from Okinawa. Time in grade refers to all three disciplines. Promotion to Black Belt requires attending 1 two-day camp per year in grade.</p>
            </article>
            <article>
                <h1>Fees and Requirements</h1>
                <testingitem INDEX="1" RANK="9th Kyu to 8th Kyu" :REQ="['Fukyu Kata 2', 'Blue Belt Ippon Kumite', '9th Kyu Tuite','Bo Warm-ups','9th Kyu Tuite #1-5']" PRICE_ADULT='20.00' PRICE_YOUTH="20.00" TIME="2 Months" />
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
                title: '8th Kyu Testing | CMAA',
                meta: [
        { name: 'description', content: '8th Kyu Requirements of the OSMKKF' },
        
      ],
                
            }
        }
    }
</script>