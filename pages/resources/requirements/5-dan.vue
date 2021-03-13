<template>
    <div>
        
        <main>
            <article>
                <h1>Testing</h1>
                <p>Testing Fees cover your official certificates from Okinawa. Time in grade refers to all three disciplines. Promotion to Black Belt requires attending 1 two-day camp per year in grade.</p>
            </article>
            <article>
                <h1>Fees and Requirements</h1>
                <testingitem INDEX="13" RANK="4th Dan to 5th Dan" :REQ="['Gojushiho', 'Black Belt Ippon Kumite', 'Instructor Certification in Karate, Kobudo, and Tuite', 'Soken no Nunchaku', 'Teco Kata']" PRICE_ADULT='400.00' TIME="60 Months" AGE="30 Years" />
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
                title: '5th Dan Testing | CMAA',
                meta: [
        { name: 'description', content: '5th Dan Requirements of the OSMKKF' },
        
      ],
                
            }
        }
    }
</script>