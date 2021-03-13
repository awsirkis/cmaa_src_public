<template>
    <div>
        
        <main>
            <article>
                <h1>Testing</h1>
                <p>Testing Fees cover your official certificates from Okinawa. Time in grade refers to all three disciplines. Promotion to Black Belt requires attending 1 two-day camp per year in grade.</p>
            </article>
            <article>
                <h1>Fees and Requirements</h1>
                <testingitem INDEX="11" RANK="2nd Dan to 3rd Dan" :REQ="['Passai Dai', 'Nijushiho', 'Black Belt Ippon Kumite','Tokumine no Kon', 'Tonfa Shodan','2nd Dan Tuite #1-5']" PRICE_ADULT='200.00' TIME="36 Months" AGE="21 Years" />
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
                title: '3rd Dan Testing | CMAA',
                meta: [
        { name: 'description', content: '3rd dan Requirements of the OSMKKF' },
        
      ],
                
            }
        }
    }
</script>