<template>
    <div>
        
        <main>
            <article>
                <h1>Testing</h1>
                <p>Testing Fees cover your official certificates from Okinawa. Time in grade refers to all three disciplines. Promotion to Black Belt requires attending 1 two-day camp per year in grade.</p>
            </article>
            <article>
                <h1>Fees and Requirements</h1>
                <testingitem INDEX="3" RANK="7th Kyu to 6th Kyu (Green Belt)" :REQ="['Wansu', 'Blue Belt Ippon Kumite','Bo Shodan', 'Bo tai Bo set #1','7th Kyu Tuite #1-5']" PRICE_ADULT='25.00' PRICE_YOUTH="20.00" TIME="3 Months" />
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
                title: '6th Kyu Testing | CMAA',
                meta: [
        { name: 'description', content: '6th Kyu Requirements of the OSMKKF' },
        
      ],
                
            }
        }
    }
</script>