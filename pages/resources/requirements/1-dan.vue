<template>
    <div>
        
        <main>
            <article>
                <h1>1 Dan</h1>
                <p>Testing Fees cover your official certificates from Okinawa. Time in grade refers to all three disciplines. Promotion to Black Belt requires attending 1 two-day camp per year in grade.</p>
            </article>
            <article>
                <h1>Fees and Requirements</h1>
                <testingitem :REQ="['Seisan', 'Pinan Yondan', 'Brown Belt Ippon Kumite','Kama Shodan', 'Suishi no Kon Sho','1st Kyu Tuite']" PRICE_ADULT='100.00' PRICE_YOUTH="75.00" TIME="6 Months" AGE="16 Years" />
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
                title: '1st Dan Testing | CMAA',
                meta: [
        { name: 'description', content: '1st dan Requirements of the OSMKKF' },
        
      ],
                
            }
        }
    }
</script>