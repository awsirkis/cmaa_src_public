<template>
    <div>
        
        <main>
            <article>
                <h1>Testing</h1>
                <p>Testing Fees cover your official certificates from Okinawa. Time in grade refers to all three disciplines. Promotion to Black Belt requires attending 1 two-day camp per year in grade.</p>
            </article>
            <article>
                <h1>Fees and Requirements</h1>
                <testingitem INDEX="12" RANK="3rd Dan to 4th Dan" :REQ="['Chinto', 'Jion', 'Black Belt Ippon Kumite','Kama Nidan', 'Suishi no Kon Dai','3rd Dan Tuite #1-5']" PRICE_ADULT='300.00' TIME="48 Months" AGE="25 Years" />
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
                title: '4th Dan Testing | CMAA',
                meta: [
        { name: 'description', content: '4th dan Requirements of the OSMKKF' },
        
      ],
                
            }
        }
    }
</script>