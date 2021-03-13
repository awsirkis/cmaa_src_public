<template>
    <div>
        
        <main>
            <article>
                <h1>Testing</h1>
                <p>Testing Fees cover your official certificates from Okinawa. Time in grade refers to all three disciplines. Promotion to Black Belt requires attending 1 two-day camp per year in grade.</p>
            </article>
            <article>
                <h1>Fees and Requirements</h1>
                <testingitem INDEX="15" RANK="6th Dan to 7th Dan" :REQ="['Rohai Sho', 'Rohai Ni', 'Black Belt Ippon Kumite','Sakugawa no kon Dai', 'Tsuken Sunakake no Kon']" PRICE_ADULT='600.00' TIME="84 Months" AGE="45 Years" />
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
                title: '7th Dan Testing | CMAA',
                meta: [
        { name: 'description', content: '7th dan Requirements of the OSMKKF' },
        
      ],
                
            }
        }
    }
</script>