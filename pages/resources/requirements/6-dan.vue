<template>
    <div>
        
        <main>
            <article>
                <h1>Testing</h1>
                <p>Testing Fees cover your official certificates from Okinawa. Time in grade refers to all three disciplines. Promotion to Black Belt requires attending 1 two-day camp per year in grade.</p>
            </article>
            <article>
                <h1>Fees and Requirements</h1>
                <testingitem INDEX="14" RANK="5th Dan to 6th Dan" :REQ="['Kusanku', 'Black Belt Ippon Kumite','Sakugawa no Kon Sho']" PRICE_ADULT='500.00' TIME="72 Months" AGE="36 Years" />
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
                title: '6th Dan Testing | CMAA',
                meta: [
        { name: 'description', content: '6th Dan Requirements of the OSMKKF' },
        
      ],
                
            }
        }
    }
</script>