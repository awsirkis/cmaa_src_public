<template>
    <div>
        
        <main>
            <article>
                <h1>Testing</h1>
                <p>Testing Fees cover your official certificates from Okinawa. Time in grade refers to all three disciplines. Promotion to Black Belt requires attending 1 two-day camp per year in grade.</p>
            </article>
            <article>
                <h1>Fees and Requirements</h1>
                <testingitem INDEX="0" RANK="10th Kyu to 9th Kyu (Blue Belt)" :REQ="['Fukyu Kata 1', 'White Belt Ippon Kumite', 'Warm-ups', '25 Basics','10th Kyu Tuite #1-5']" PRICE_ADULT='20.00' PRICE_YOUTH="20.00" TIME="2 Months" />
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
                title: '9th Kyu Testing | CMAA',
                meta: [
        { name: 'description', content: '9th Kyu Requirements of the OSMKKF' },
        
      ],
                
            }
        }
    }
</script>